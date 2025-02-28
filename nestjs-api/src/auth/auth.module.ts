import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'secret-keyword-temporary',
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
