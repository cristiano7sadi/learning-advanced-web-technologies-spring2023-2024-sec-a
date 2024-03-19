import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AllUsersService } from 'src/all-users/all-users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AllUsersModule } from 'src/all-users/all-users.module';
@Module({
  imports: [AllUsersModule, JwtModule.register({ secret: 'secret101' })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
