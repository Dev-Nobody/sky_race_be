"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiegonsModule = void 0;
const common_1 = require("@nestjs/common");
const piegons_service_1 = require("./piegons.service");
const piegons_controller_1 = require("./piegons.controller");
let PiegonsModule = class PiegonsModule {
};
exports.PiegonsModule = PiegonsModule;
exports.PiegonsModule = PiegonsModule = __decorate([
    (0, common_1.Module)({
        controllers: [piegons_controller_1.PiegonsController],
        providers: [piegons_service_1.PiegonsService],
    })
], PiegonsModule);
//# sourceMappingURL=piegons.module.js.map