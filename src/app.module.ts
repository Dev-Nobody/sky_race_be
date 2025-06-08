import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./db/entities/user.entity";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { UsersModule } from "./users/users.module";
import { TournamentsModule } from "./tournaments/tournaments.module";
import { ParticipantsModule } from "./participants/participants.module";
import { PiegonsModule } from "./piegons/piegons.module";
import { ResultsModule } from "./results/results.module";
import { AdminModule } from "./admin/admin.module";
import { DayResult } from "./db/entities/dayResult.entity";
import { Loft } from "./db/entities/loft.entity";
import { Tournament } from "./db/entities/tournament.entity";
import { PigeonTime } from "./db/entities/piegonTime.entity";
import { Pigeon } from "./db/entities/piegon.entity";

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigService available everywhere
      envFilePath: ".env", // Load variables from .env file
    }),
    MailerModule.forRoot({
      transport: {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "77152036bc2e27",
          pass: "e0ec8aa46ed0a7",
        },
      },
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 10,
      },
    ]),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost", // or 'postgres' if using inside Docker container
      port: 5432,
      username: "root",
      password: "root",
      database: "mine",
      autoLoadEntities: true,
      synchronize: true, // disable in production
      entities: [User, DayResult, Loft, Pigeon, PigeonTime, Tournament],
    }),
    UsersModule,
    TournamentsModule,
    ParticipantsModule,
    PiegonsModule,
    ResultsModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
