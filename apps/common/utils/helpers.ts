import { Type } from "@nestjs/common";
import { RouteTree } from "@nestjs/core";
import { Controller } from "@nestjs/common/interfaces";

export function appendSubPathsToBaseModule(
  basePath: string,
  controllers: Type<Controller>[]
): RouteTree[] {
  return controllers.map((controller) => {
    return {
      path: `${basePath}`,
      module: controller as Type<Controller>,
    };
  });
}

export function isUniqueConstraintViolation(error: any): boolean {
  // Check for common patterns in TypeORM errors
  return (
    error?.code === "ER_DUP_ENTRY" || // MySQL
    error?.code === "23505" || // PostgreSQL
    error?.message?.includes("unique") || // Generic fallback for other DBs
    error?.detail?.includes("already exists")
  );
}
