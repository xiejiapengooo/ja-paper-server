import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { PaperService } from "./paper.service";
import { GetPaperDto, GetQuestionsMineDto, PostPaperDto } from "./paper.dto";
import { GetTokenPayload, Public, ResponseMessage } from "../decorator";
import type { UserTokenPayload } from "../types";

@Controller("paper")
export class PaperController {
  constructor(private paperService: PaperService) {}

  @Public()
  @Get("list")
  async getList(@GetTokenPayload() userTokenPayload?: UserTokenPayload) {
    return this.paperService.getList(userTokenPayload);
  }

  @Get("questions/mine")
  async getQuestionsMine(@Query() dto: GetQuestionsMineDto, @GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.paperService.getQuestionsMine(dto, userTokenPayload);
  }

  @Get(":level/:yearMonth")
  async getPaper(@Param() dto: GetPaperDto, @GetTokenPayload() userTokenPayload: UserTokenPayload) {
    return this.paperService.getPaper(dto, userTokenPayload);
  }

  @Post(":paperId")
  @ResponseMessage("Submission successful!")
  async postPaper(
    @Param("paperId") paperId: string,
    @Body() dto: PostPaperDto,
    @GetTokenPayload() userTokenPayload: UserTokenPayload,
  ) {
    return this.paperService.postPaper(paperId, dto, userTokenPayload);
  }
}
