import { ApiOperation } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';


@Controller()
export class ApiGatewayController {
  constructor() { }

  @Get("hello-world")
  @ApiOperation({ summary: 'Hello World Test endpoint' })
  async sendOnboardingEmail(): Promise<{}> {
    try {

      return { "message": "Hello World" };
    } catch (error) {
      throw new Error("Error sending hello world");
    }
  }

}