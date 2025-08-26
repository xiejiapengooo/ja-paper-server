import { Injectable } from "@nestjs/common";
import { AsyncLocalStorage } from "async_hooks";

@Injectable()
export class AlsService extends AsyncLocalStorage<{
  headers: Record<string, any>;
  requestId: string;
}> {
  getUserAgent() {
    return this.getStore()?.headers["user-agent"];
  }
  getRequestId() {
    return this.getStore()?.requestId;
  }
}
