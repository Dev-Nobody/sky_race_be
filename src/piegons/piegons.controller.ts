import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PiegonsService } from './piegons.service';
import { CreatePiegonDto } from './dto/create-piegon.dto';
import { UpdatePiegonDto } from './dto/update-piegon.dto';

@Controller('piegons')
export class PiegonsController {
  constructor(private readonly piegonsService: PiegonsService) {}

  @Post()
  create(@Body() createPiegonDto: CreatePiegonDto) {
    return this.piegonsService.create(createPiegonDto);
  }

  @Get()
  findAll() {
    return this.piegonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.piegonsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePiegonDto: UpdatePiegonDto) {
    return this.piegonsService.update(+id, updatePiegonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.piegonsService.remove(+id);
  }
}
