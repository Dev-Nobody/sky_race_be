import {
  Controller,
  Get,
  Param,
  Put,
  Body,
  Delete,
  UseGuards,
  Req,
  Patch,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { JwtGuard } from "src/common/guards/jwt.guards";
import { RolesGuard } from "src/common/guards/roles.guard";
import { UserRole } from "src/db/entities/user.entity";
import { Roles } from "src/common/decorators/roles.decorator";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtGuard)
  @Get("me")
  getMe(@Req() req: any) {
    console.log(req.user);
    const userId = req.user.id;
    return this.usersService.findMe(userId);
  }

  @UseGuards(JwtGuard)
  @Get(":id")
  getUser(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Patch(":id")
  updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @UseGuards(JwtGuard, RolesGuard)
  @Roles("admin")
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }
}
