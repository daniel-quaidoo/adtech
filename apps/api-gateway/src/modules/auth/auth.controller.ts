import { Response } from 'express';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Request, Post, Body, Get, Query, Res, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';

// services
import { AuthService } from './auth.service';

// decorators
import { Public } from 'apps/common/decorators/public.decorator';

// dto
import { AuthSignInDto } from './core/dto/sign-in.dto';
import { MailActionDto } from './core/dto/mail-action.dto';
import { VerifyEmailDto } from './core/dto/verify-email.dto';
import { ResetPasswordDto } from './core/dto/reset-password.dto';
import { ChangePasswordDto } from './core/dto/change-password.dto';

// auth guards
import { PassportJwtAuthGuard } from './core/guards/passport-jwt.guard';
import { PassportLocalGuard } from './core/guards/passport-local.guard';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('/')
  @ApiOperation({ summary: 'User Login' })
  @ApiResponse({ status: 200, description: 'Logged in user successfully.' })
  @ApiResponse({ status: 400, description: 'Failed to log in user.' })
  async userLogin(@Body() authSignInDto: AuthSignInDto) {
    return await this.authService.authenticate(authSignInDto);
  }

  @Post('/reset-password')
  @ApiOperation({ summary: 'Reset Password' })
  @ApiResponse({ status: 200, description: 'Password reset successfully.' })
  @ApiResponse({ status: 400, description: 'Failed to reset password.' })
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return await this.authService.resetPassword(resetPasswordDto);
  }


  @Post('/change-password')
  @ApiOperation({ summary: 'Change Password' })
  @ApiResponse({ status: 200, description: 'Password changed successfully.' })
  @ApiResponse({ status: 400, description: 'Failed to change password.' })
  changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return this.authService.changePassword(changePasswordDto);
  }

  @Get('/verify-email')
  @ApiOperation({ summary: 'Verify Email' })
  @ApiResponse({ status: 200, description: 'Email verified successfully.' })
  @ApiResponse({ status: 400, description: 'Failed to verify email.' })
  async verifyEmail(@Query() query: VerifyEmailDto, @Res() res: Response) {
    const verificationResult = await this.authService.verifyEmail(query.token);
    const frontendUrl = await this.authService.getFrontEndBaseUrl();

    // redirect to the desired URL based on the result
    if (verificationResult) {
      return res.redirect(`${frontendUrl}`);
    } else {
      return res.redirect(`${frontendUrl}/404`);
    }
  }

  @Get('/mail-unsubscribe')
  @ApiOperation({ summary: 'Mail Unsubscribe' })
  @ApiResponse({ status: 200, description: 'Successfully unsubscribed from emails.', type: MailActionDto})
  @ApiResponse({status: 422, description: 'Validation Error'})
  async mailUnsubscribe(@Query() query: MailActionDto) {
    return await this.authService.unsubscribeEmail(query);
  }

  @Get('/mail-subscribe')
  @ApiOperation({ summary: 'Mail Subscribe' })
  @ApiResponse({ status: 200, description: 'Successfully subscribed to emails.' })
  @ApiResponse({ status: 400, description: 'Failed to subscribe to emails.' })
  async mailSubscribe(@Query() query: MailActionDto) {
    return await this.authService.subscribeEmail(query);
  }


    @HttpCode(HttpStatus.OK)
    @Post('local-guard-test-endpoint')
    @UseGuards(PassportLocalGuard)
    login(@Request() request) {
        return this.authService.signIn(request.user);
    }

    @Get('jwt-auth-test-endpoint')
    @ApiBearerAuth() 
    @UseGuards(PassportJwtAuthGuard)
    getUserInfo(@Request() request) {
      return { data: request.user };
    }
}