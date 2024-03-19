import { Injectable } from '@nestjs/common';
import { AllUsersService } from 'src/all-users/all-users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly allUserService: AllUsersService,
    private jwtServices: JwtService,
  ) {}
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtServices.sign(payload),
    };
  }
}
