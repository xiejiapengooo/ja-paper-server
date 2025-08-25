import { SetMetadata } from "@nestjs/common";

export enum ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const ROLE_KEY = "roles";

export const Roles = (...roles: ROLES[]) => SetMetadata(ROLE_KEY, roles);
