import { ConnectOptions } from "mongoose";
import mongoose from "mongoose";
import { mongoDbUrl } from "../config/index.js";

const { connect } = mongoose;

export default async () =>
  connect(mongoDbUrl, { useNewUrlParser: true } as ConnectOptions)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB: ", err);
    });
