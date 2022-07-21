import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import libraryApplication from "./routes/libraryApplication.js";

const app = express();

const url = -URL- ; //paste the mongo db compass url

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database!"));

app.listen(5000);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/Signup", libraryApplication);
app.use("/Login", libraryApplication);
