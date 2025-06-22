"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePigeonTimeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pigeon_time_dto_1 = require("./create-pigeon-time.dto");
class UpdatePigeonTimeDto extends (0, mapped_types_1.PartialType)(create_pigeon_time_dto_1.CreatePigeonTimeDto) {
}
exports.UpdatePigeonTimeDto = UpdatePigeonTimeDto;
//# sourceMappingURL=update-pigeon-time.dto.js.map