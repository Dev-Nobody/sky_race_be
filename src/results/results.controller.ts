import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ResultsService } from "./results.service";
import { CreateResultDto } from "./dto/create-result.dto";
import { UpdateResultDto } from "./dto/update-result.dto";

@Controller("results")
export class ResultsController {
  constructor(private readonly resultService: ResultsService) {}

  @Get("tournament/:id")
  leaderboard(@Param("id") id: number) {
    return this.resultService.getLeaderboard(id);
  }
}
