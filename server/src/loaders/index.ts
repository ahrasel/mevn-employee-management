import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";
import { Express } from "express";

export default async (app: Express) => {
  // mongoose connection loader
  console.log("\x1b[36m%s\x1b[0m", "MongoDB Initializing");
  await mongooseLoader();
  // express server loader
  console.log("\x1b[36m%s\x1b[0m", "Express server Initializing");
  await expressLoader(app);
};
