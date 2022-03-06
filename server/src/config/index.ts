import { config } from "dotenv";

config();

export const port = process.env.PORT ?? "3000";
export const mongoDbUrl = process.env.MONGO_DB_URL ?? "";
export const jwtSecret = process.env.JWT_SECRET;
export const jwtExpiration = process.env.JWT_EXPIRATION;
