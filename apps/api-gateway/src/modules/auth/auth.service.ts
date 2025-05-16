import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToInstance } from "class-transformer";
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";

// services
import { MailService } from "../messaging/mail/mail.service";

// entity
import { User } from "./users/entities/user.entity";
import { UserCredentials } from "./users/entities/user-credentials.entity";

// contracts
import {
  AuthDto,
  AuthSignInDto,
  AuthResultDto,
  ResetPasswordDto,
  MailActionDto,
  ChangePasswordDto,
  UserDto,
  WelcomeMailDto,
  ResetPasswordMailDto,
} from "@lib/contracts";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private mailService: MailService,
    private configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserCredentials) private readonly userCredentialsRepository: Repository<UserCredentials>,
  ) {}

  async getFrontEndBaseUrl(): Promise<string> {
    return this.configService.get<string>("FE_BASE_URL");
  }

  async signIn(user: AuthSignInDto): Promise<AuthResultDto> {
    const tokenPayload = {
      sub: user.userId,
      username: user.email,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      accessToken,
      email: user.email,
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  // find a user by email
  async findUserByEmail(email: string): Promise<UserDto | undefined> {
    const user = await this.userRepository.findOne({
      where: { email: email },
      relations: ["credentials"],
    });

    if (!user) {
      return null;
    }

    return plainToInstance(UserDto, user, { excludeExtraneousValues: false });
  }

  // verify email
  async verifyEmail(token: string): Promise<boolean> {
    const userCreds = await this.userCredentialsRepository.findOne({
      where: { verification_token: token },
    });

    if (!userCreds) {
      throw new NotFoundException(`Invalid verification token`);
    }

    // Mark email as verified
    userCreds.is_verified = true;
    userCreds.verification_token = "";
    await this.userCredentialsRepository.save(userCreds);

    // Send welcome email
    await this.mailService.sendWelcomeMail({
      first_name: userCreds.user.first_name,
      last_name: userCreds.user.last_name,
      email: userCreds.user.email,
      user_id: userCreds.user.user_id,
    } as WelcomeMailDto);

    return true;
  }

  // unsubscribe user from emails
  async unsubscribeEmail(input: MailActionDto): Promise<void> {
    const user = await this.findUserByEmail(input.email);

    if (!user) {
      throw new NotFoundException(`User with email ${input.email} not found`);
    }

    // unsubscribe user
    user.credentials.is_subscribed = false;

    await this.userRepository.save(user);
  }

  // subscribe user to emails
  async subscribeEmail(input: MailActionDto): Promise<{ message: string }> {
    const user = await this.findUserByEmail(input.email);

    if (!user) {
      throw new NotFoundException(`User with email ${input.email} not found`);
    }

    if (user.credentials.is_subscribed_token == input.token) {
      // subscribe user
      user.credentials.is_subscribed = true;
      await this.userRepository.save(user);

      return { message: "Successfully subscribed to emails" };
    }

    throw new BadRequestException("Error subscribing email!");
  }

  // authenticate user
  async authenticate(input: AuthDto): Promise<AuthResultDto> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return this.signIn(user);
  }

  // validate user credentials
  async validateUser(input: AuthDto): Promise<AuthSignInDto | null> {
    const user = await this.findUserByEmail(input.email);

    if (
      user &&
      // bcrypt.compareSync(input.password, user.credentials.password) &&
      input.password === user.credentials.password &&
      user.credentials.is_verified
    ) {
      return {
        userId: user.user_id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
      };
    }

    return null;
  }

  // reset password
  async resetPassword(
    input: ResetPasswordDto
  ): Promise<{ message: string } | any> {
    const user = await this.findUserByEmail(input.email);

    if (!user) {
      throw new NotFoundException(`User with email ${input.email} not found`);
    }

    user.credentials.reset_token = uuidv4();
    await this.userRepository.save(user);

    // reset link
    const feBaseUrl = this.configService.get<string>("FE_BASE_URL");
    const resetLink = `${feBaseUrl}/account/change-password?email=${user.email}&token=${user.credentials.reset_token}`;

    // send reset token link
    if (user) {
      await this.mailService.sendPasswordResetMail({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        reset_link: resetLink,
      } as ResetPasswordMailDto);
    }
  }

  async changePassword(input: ChangePasswordDto): Promise<{ message: string }> {
    const user = await this.findUserByEmail(input.email);

    if (!user) {
      throw new UnauthorizedException("User not found");
    }

    const isValidToken = input.token === user.credentials.reset_token;

    if (!isValidToken) {
      throw new UnauthorizedException("Invalid reset token");
    }

    // update password
    user.credentials.password = bcrypt.hashSync(input.newPassword, 10);
    user.credentials.reset_token = "";
    await this.userRepository.save(user);

    // send confirmation email
    return { message: "Password changed successfully" };
  }
}
