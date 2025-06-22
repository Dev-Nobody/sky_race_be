import { Pigeon } from "src/db/entities/pigeon.entity";
import { Repository } from "typeorm";
import { CreatePigeonDto } from "./dto/create-pigeon.dto";
export declare class PigeonsService {
  private pigeonRepo;
  constructor(pigeonRepo: Repository<Pigeon>);
  add(dto: CreatePigeonDto): Promise<Pigeon>;
  markStart(id: number): Promise<Pigeon>;
  markLanding(id: number): Promise<Pigeon>;
  getByParticipant(participantId: number): Promise<Pigeon[]>;
}
