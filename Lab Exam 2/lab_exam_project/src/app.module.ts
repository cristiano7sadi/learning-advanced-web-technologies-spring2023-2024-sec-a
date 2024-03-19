import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
// import { AllUsersModule } from './all-users/all-users.module';
import { AllUsersModule } from './all-users/all-users.module';

@Module({
  imports: [AdminModule, AuthModule, AllUsersModule, AllUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
