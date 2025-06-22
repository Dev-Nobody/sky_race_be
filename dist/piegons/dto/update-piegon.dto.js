"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePigeonDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pigeon_dto_1 = require("./create-pigeon.dto");
class UpdatePigeonDto extends (0, mapped_types_1.PartialType)(
  create_pigeon_dto_1.CreatePigeonDto
) {}
exports.UpdatePigeonDto = UpdatePigeonDto;
//# sourceMappingURL=update-pigeon.dto.js.map
