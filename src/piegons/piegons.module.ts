import { Module } from '@nestjs/common';
import { PiegonsService } from './piegons.service';
import { PiegonsController } from './piegons.controller';

@Module({
  controllers: [PiegonsController],
  providers: [PiegonsService],
})
export class PiegonsModule {}
