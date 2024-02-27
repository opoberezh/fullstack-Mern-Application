import express from "express";
import { verifyToken } from "../../middlewares/authenticate.js";
import upload from "../../middlewares/upload.js";
import { createPost, getFeedPosts,getUserPosts, likePost } from "../../controllers/posts.js";

const router = express.Router();

// CREATE
router.post("/", verifyToken, upload.single("picture"), createPost);

// READ
router.get("/", verifyToken, getFeedPosts);

 router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost); //like & unlike posts

export default router;
