import { Global, Module } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";
import { AlsService } from "./als.service";

interface RequestContext {
  requestId: string;
}

@Global()
@Module({
  providers: [AlsService],
  exports: [AlsService],
})
export class AlsModule {}
