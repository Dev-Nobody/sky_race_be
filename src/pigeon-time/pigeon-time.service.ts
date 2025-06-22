import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePigeonTimeDto } from "./dto/create-pigeon-time.dto";
import { PigeonTime } from "src/db/entities/pigeonTime.entity";

@Injectable()
export class PigeonTimeService {
  constructor(
    @InjectRepository(PigeonTime)
    private pigeonTimeRepo: Repository<PigeonTime>
  ) {}

  private flightTracker: Map<number, Date> = new Map();

  async logFlight(dto: CreatePigeonTimeDto) {
    const start = new Date(dto.start_time);
    const end = new Date(dto.end_time);
    const duration_minutes = Math.floor(
      (end.getTime() - start.getTime()) / 60000
    ); // convert ms to minutes

    const entry = this.pigeonTimeRepo.create({
      pigeon: { id: dto.pigeon_id },
      start_time: start,
      end_time: end,
      duration_minutes,
    });

    return await this.pigeonTimeRepo.save(entry);
  }

  async startFlight(pigeonId: number) {
    const start = new Date();
    this.flightTracker.set(pigeonId, start);
    return { pigeon_id: pigeonId, start_time: start };
  }

  async endFlight(pigeonId: number) {
    const start = this.flightTracker.get(pigeonId);
    if (!start) throw new NotFoundException("No flight start time recorded");

    const end = new Date();
    const duration_minutes = Math.floor(
      (end.getTime() - start.getTime()) / 60000
    );

    const entry = this.pigeonTimeRepo.create({
      pigeon: { id: pigeonId },
      start_time: start,
      end_time: end,
      duration_minutes,
    });

    this.flightTracker.delete(pigeonId);
    return await this.pigeonTimeRepo.save(entry);
  }
  async getByPigeon(pigeonId: number) {
    return await this.pigeonTimeRepo.find({
      where: { pigeon: { id: pigeonId } },
      order: { start_time: "ASC" },
    });
  }

  async getTotalDuration(pigeonId: number): Promise<number> {
    const records = await this.pigeonTimeRepo.find({
      where: { pigeon: { id: pigeonId } },
    });
    return records.reduce((sum, r) => sum + (r.duration_minutes || 0), 0);
  }
}
