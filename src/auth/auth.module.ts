import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/db/entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { VerificationService } from "./verification/user.verification";
import { JwtStrategy } from "src/common/strategies/jwt.strategy";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }), // Add this
    JwtModule.register({ privateKey: "" }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, VerificationService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule, PassportModule], // 👈 export to use in other modules
})
export class AuthModule {}
