import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
