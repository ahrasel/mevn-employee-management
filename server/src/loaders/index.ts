import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";

export default async (app: any) => {
  // mongoose connection loader
  console.log("\x1b[36m%s\x1b[0m", "MongoDB Initializing");
  await mongooseLoader();
  // express server loader
  console.log("\x1b[36m%s\x1b[0m", "Express server Initializing");
  await expressLoader(app);
};
