import { json } from "express";
import morgan from "morgan";

export default async (app: any) => {
  // HTTP request logger middleware for node.js
  app.use(morgan("dev"));
  // express json middleware
  app.use(json());
  console.log("\x1b[36m%s\x1b[0m", "Express server Initialized");
  return app;
};
