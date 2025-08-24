import { SetMetadata } from "@nestjs/common";

export enum ROLES {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const ROLES_VALUE = Object.values(ROLES);

export const ROLE_KEY = "role";

export const Role = (...roles: ROLES[]) => SetMetadata(ROLE_KEY, roles);
