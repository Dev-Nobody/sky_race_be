import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/db/entities/user.entity";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async findMe(userId: number) {
    if (!userId) throw new NotFoundException("ID is not provided.");
    const currentUser = await this.userRepo.findOne({ where: { id: userId } });

    if (!currentUser)
      throw new NotFoundException("User not found with this ID.");

    return currentUser;
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException("User not found.");
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    const userEmailMatch = await this.userRepo.findOne({
      where: { email: updateUserDto.email },
    });
    if (userEmailMatch) throw new BadRequestException("EMAIL ALREADY IN USE");
    // If email is being updated
    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingUser = await this.userRepo.findOne({
        where: { email: updateUserDto.email },
      });

      if (existingUser) {
        throw new Error(`Email "${updateUserDto.email}" is already in use.`);
      }
    }

    Object.assign(user, updateUserDto);
    return await this.userRepo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await this.userRepo.remove(user);
  }

  async findAll() {
    return await this.userRepo.find();
  }
}
