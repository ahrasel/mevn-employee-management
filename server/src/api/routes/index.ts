import cors from "cors";
import { Express, Request, Response } from "express";

// import statusRoutes from "./status.js";
// import authRoutes from "./auth.js";

export default async (app: Express) => {
  // CORS-enabled for all origins
  app.use(cors());

  // status routes
  //   app.use("/api/v1/status", statusRoutes);

  // auth routes
  //   app.use("/api/v1/auth", authRoutes);

  // 404 route
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: "Not Found",
    });
  });

  return app;
};
