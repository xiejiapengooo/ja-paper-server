import { Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { PaperService } from "./paper.service";
import { GetPaperDto, GetPartsDto, GetSectionDto } from "./paper.dto";
import { Public, ResponseMessage } from "../decorator";

@Controller("paper")
export class PaperController {
  constructor(private paperService: PaperService) {}

  @Public()
  @Get("list")
  async getList() {
    return this.paperService.getList();
  }

  @Get("")
  async getPaper(@Query() dto: GetPaperDto) {
    return this.paperService.getPaper(dto);
  }

  @Get("parts")
  async getParts(@Query() dto: GetPartsDto) {
    return this.paperService.getParts(dto);
  }

  @Get("section/:id")
  async getSection(@Param() dto: GetSectionDto) {
    return this.paperService.getSection(dto);
  }
}
