import { AuthService } from '#@/auth/auth.service';
import { LocalStrategyGuard } from '#@/auth/strategy/local.strategy';
import { User } from '#@/user/entities/user.entity';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse, OmitType } from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('/signup')
  async signup(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: CreateUserDto,
  ) {
    // TODO encrypt password
    const user = await this.authService.signup(dto);
    res.setHeader('location', `users/${user.id}`);
  }

  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ type: OmitType(User, ['password']) })
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalStrategyGuard)
  async login(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const user = req.user as User;

    const jwt = await this.authService.generateJwt(user);

    res.cookie('token', jwt);

    const { password, ...response } = user;

    return response;
  }
}
