"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePiegonDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_piegon_dto_1 = require("./create-piegon.dto");
class UpdatePiegonDto extends (0, mapped_types_1.PartialType)(create_piegon_dto_1.CreatePiegonDto) {
}
exports.UpdatePiegonDto = UpdatePiegonDto;
//# sourceMappingURL=update-piegon.dto.js.map