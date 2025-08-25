import { Injectable } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

interface RequestContext {
  headers: Record<string, any>;
  requestId: string;
}

@Injectable()
export class AlsService extends AsyncLocalStorage<RequestContext> {}
