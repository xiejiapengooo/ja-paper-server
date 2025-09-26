import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { PaperService } from "./paper.service";
import { GetPaperDto, GetSectionsDto, PostPaperDto } from "./paper.dto";
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

  @Get("sections")
  async getSections(@Query() dto: GetSectionsDto) {
    return this.paperService.getSections(dto);
  }
}
