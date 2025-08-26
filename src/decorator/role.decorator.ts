import { SetMetadata } from "@nestjs/common";
import { ROLE_LIST } from "../types";

export const ROLE_KEY = "roles";

export const Roles = (...roles: ROLE_LIST) => SetMetadata(ROLE_KEY, roles);
