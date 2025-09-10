import { Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { PaperService } from "./paper.service";
import { GetPartsDto, GetSectionDto } from "./paper.dto";

@Controller("paper")
export class PaperController {
  constructor(private paperService: PaperService) {}

  @Get("list")
  async getList() {
    return this.paperService.getList();
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
