import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

// http://localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
router.post("/update", updatePost);

export default router;
