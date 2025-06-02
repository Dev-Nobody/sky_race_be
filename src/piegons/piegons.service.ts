import { Injectable } from '@nestjs/common';
import { CreatePiegonDto } from './dto/create-piegon.dto';
import { UpdatePiegonDto } from './dto/update-piegon.dto';

@Injectable()
export class PiegonsService {
  create(createPiegonDto: CreatePiegonDto) {
    return 'This action adds a new piegon';
  }

  findAll() {
    return `This action returns all piegons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} piegon`;
  }

  update(id: number, updatePiegonDto: UpdatePiegonDto) {
    return `This action updates a #${id} piegon`;
  }

  remove(id: number) {
    return `This action removes a #${id} piegon`;
  }
}
