// const express = require('express');
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import posts from "./routers/posts.js";

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);
// localhost:5000/posts

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connect to DB successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error is", error);
  });
