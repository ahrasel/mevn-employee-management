import express from "express";
import loaders from "./loaders";
const app = express();

loaders(app);

app.use(express.json());

app.get("/", (req, res) => {
  res
    .json({
      message: "Api Worked 🌎🌍🌏",
    })
    .status(200);
});

export default app;
