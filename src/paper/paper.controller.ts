import { Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { PaperService } from "./paper.service";
import { GetPaperDto, GetSectionDto, GetSectionsDto } from "./paper.dto";
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

  @Get("sections")
  async getSections(@Query() dto: GetSectionsDto) {
    return this.paperService.getSections(dto);
  }

  @Get("section/:id")
  async getSection(@Param() dto: GetSectionDto) {
    return this.paperService.getSection(dto);
  }
}
