import { PartialType } from '@nestjs/mapped-types';
import { CreatePigeonTimeDto } from './create-pigeon-time.dto';

export class UpdatePigeonTimeDto extends PartialType(CreatePigeonTimeDto) {}
