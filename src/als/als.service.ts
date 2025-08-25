import { Injectable } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

interface RequestContext {
  requestId: string;
  // headers: Record<string, any>;
}

@Injectable()
export class AlsService extends AsyncLocalStorage<RequestContext> {}
