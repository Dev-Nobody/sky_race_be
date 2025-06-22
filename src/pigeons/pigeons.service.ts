import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePigeonDto } from "./dto/create-pigeon.dto";
import { Pigeon } from "src/db/entities/pigeon.entity";

@Injectable()
export class PigeonsService {
  constructor(
    @InjectRepository(Pigeon)
    private pigeonRepo: Repository<Pigeon>
  ) {}

  async add(dto: CreatePigeonDto) {
    const pigeon = this.pigeonRepo.create({
      name: dto.name,
      color: dto.color,
      participant: { id: dto.participant_id },
    });
    return await this.pigeonRepo.save(pigeon);
  }

  async getByParticipant(participantId: number) {
    return await this.pigeonRepo.find({
      where: { participant: { id: participantId } },
    });
  }

  async getById(id: number) {
    const pigeon = await this.pigeonRepo.findOne({ where: { id } });
    if (!pigeon) throw new NotFoundException("Pigeon not found");
    return pigeon;
  }
}
