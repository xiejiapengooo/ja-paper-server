import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { PaperService } from "./paper.service";
import { GetPaperDto, GetPartDto, PostPaperDto } from "./paper.dto";
import { GetTokenPayload, Public, ResponseMessage } from "../decorator";
import type { UserTokenPayload } from "../types";

@Controller("paper")
export class PaperController {
  constructor(private paperService: PaperService) {}

  @Public()
  @Get("list")
  async getList() {
    return this.paperService.getList();
  }

  @Get("scores")
  async getScores(@GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.paperService.getScores(userTokenPayload);
  }

  @Get("")
  async getPaper(@Query() dto: GetPaperDto) {
    return this.paperService.getPaper(dto);
  }

  @Post("")
  @ResponseMessage("Submission successful!")
  async postPaper(@Body() dto: PostPaperDto, @GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.paperService.postPaper(dto, userTokenPayload);
  }

  @Get("part/:partId")
  async getPart(@Param() dto: GetPartDto) {
    return this.paperService.getPart(dto);
  }
}
