import { PartialType } from '@nestjs/mapped-types';
import { CreatePiegonDto } from './create-piegon.dto';

export class UpdatePiegonDto extends PartialType(CreatePiegonDto) {}
