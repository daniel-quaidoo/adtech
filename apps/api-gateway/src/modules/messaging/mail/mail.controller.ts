import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";

// service
import { MailService } from "./mail.service";

// contracts
import {
  WelcomeMailDto,
  ConfirmMailDto,
  OnboardingMailDto,
  ResetPasswordMailDto,
} from "@lib/contracts";

@Controller("mail")
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post("send-reset-password")
  @HttpCode(HttpStatus.OK)
  sendResetPassword(@Body() body: ResetPasswordMailDto): Promise<void> {
    return this.mailService.sendPasswordResetMail(body);
  }

  @Post("send-verification")
  @HttpCode(HttpStatus.OK)
  sendVerification(@Body() body: ConfirmMailDto): Promise<void> {
    return this.mailService.sendVerificationMail(body);
  }

  @Post("send-welcome")
  @HttpCode(HttpStatus.OK)
  sendWelcome(@Body() body: WelcomeMailDto): Promise<void> {
    return this.mailService.sendWelcomeMail(body);
  }

  @Post("send-onboarding")
  @HttpCode(HttpStatus.OK)
  sendOnboarding(@Body() body: OnboardingMailDto): Promise<void> {
    return this.mailService.sendOnboardingMail(body);
  }

  @Post("send-qr")
  @HttpCode(HttpStatus.OK)
  sendQrCode(
    @Body()
    body: {
      data: OnboardingMailDto;
      recipient: string;
      subject: string;
    }
  ): Promise<void> {
    return this.mailService.sendQrCodeMail(
      body.data,
      body.recipient,
      body.subject
    );
  }
}
