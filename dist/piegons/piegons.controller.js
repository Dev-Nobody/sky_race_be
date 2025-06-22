"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PigeonsController = void 0;
const common_1 = require("@nestjs/common");
const pigeons_service_1 = require("./pigeons.service");
const create_pigeon_dto_1 = require("./dto/create-pigeon.dto");
const update_pigeon_dto_1 = require("./dto/update-pigeon.dto");
let PigeonsController = class PigeonsController {
  pigeonsService;
  constructor(pigeonsService) {
    this.pigeonsService = pigeonsService;
  }
  create(createPigeonDto) {
    return this.pigeonsService.create(createPigeonDto);
  }
  findAll() {
    return this.pigeonsService.findAll();
  }
  findOne(id) {
    return this.pigeonsService.findOne(+id);
  }
  update(id, updatePigeonDto) {
    return this.pigeonsService.update(+id, updatePigeonDto);
  }
  remove(id) {
    return this.pigeonsService.remove(+id);
  }
};
exports.PigeonsController = PigeonsController;
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      typeof (_b =
        typeof create_pigeon_dto_1.CreatePigeonDto !== "undefined" &&
        create_pigeon_dto_1.CreatePigeonDto) === "function"
        ? _b
        : Object,
    ]),
    __metadata("design:returntype", void 0),
  ],
  PigeonsController.prototype,
  "create",
  null
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0),
  ],
  PigeonsController.prototype,
  "findAll",
  null
);
__decorate(
  [
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0),
  ],
  PigeonsController.prototype,
  "findOne",
  null
);
__decorate(
  [
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
      String,
      update_pigeon_dto_1.UpdatePigeonDto,
    ]),
    __metadata("design:returntype", void 0),
  ],
  PigeonsController.prototype,
  "update",
  null
);
__decorate(
  [
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0),
  ],
  PigeonsController.prototype,
  "remove",
  null
);
exports.PigeonsController = PigeonsController = __decorate(
  [
    (0, common_1.Controller)("pigeons"),
    __metadata("design:paramtypes", [
      typeof (_a =
        typeof pigeons_service_1.PigeonsService !== "undefined" &&
        pigeons_service_1.PigeonsService) === "function"
        ? _a
        : Object,
    ]),
  ],
  PigeonsController
);
//# sourceMappingURL=pigeons.controller.js.map
