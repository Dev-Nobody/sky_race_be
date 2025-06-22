"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./db/entities/user.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const users_module_1 = require("./users/users.module");
const tournaments_module_1 = require("./tournaments/tournaments.module");
const participants_module_1 = require("./participants/participants.module");
const results_module_1 = require("./results/results.module");
const admin_module_1 = require("./admin/admin.module");
const dayResult_entity_1 = require("./db/entities/dayResult.entity");
const tournament_entity_1 = require("./db/entities/tournament.entity");
const participants_entity_1 = require("./db/entities/participants.entity");
const pigeons_module_1 = require("./pigeons/pigeons.module");
const pigeon_entity_1 = require("./db/entities/pigeon.entity");
const pigeonTime_entity_1 = require("./db/entities/pigeonTime.entity");
const pigeon_time_module_1 = require("./pigeon-time/pigeon-time.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ".env",
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: "sandbox.smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                        user: "77152036bc2e27",
                        pass: "e0ec8aa46ed0a7",
                    },
                },
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60,
                    limit: 10,
                },
            ]),
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "root",
                password: "root",
                database: "mine",
                autoLoadEntities: true,
                synchronize: true,
                entities: [user_entity_1.User, dayResult_entity_1.DayResult, participants_entity_1.Participant, pigeon_entity_1.Pigeon, pigeonTime_entity_1.PigeonTime, tournament_entity_1.Tournament],
            }),
            users_module_1.UsersModule,
            tournaments_module_1.TournamentsModule,
            participants_module_1.ParticipantsModule,
            pigeons_module_1.PigeonsModule,
            results_module_1.ResultsModule,
            admin_module_1.AdminModule,
            pigeon_time_module_1.PigeonTimeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map