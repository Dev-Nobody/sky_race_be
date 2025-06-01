"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLogInDto = exports.UpdateRegisterDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_auth_dto_1 = require("./create-auth.dto");
class UpdateRegisterDto extends (0, mapped_types_1.PartialType)(create_auth_dto_1.RegisterDto) {
}
exports.UpdateRegisterDto = UpdateRegisterDto;
class UpdateLogInDto extends (0, mapped_types_1.PartialType)(create_auth_dto_1.LoginDto) {
}
exports.UpdateLogInDto = UpdateLogInDto;
//# sourceMappingURL=update-auth.dto.js.map