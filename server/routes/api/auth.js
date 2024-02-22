import express from "express";
import upload from "../../middlewares/upload.js";
import {register, login} from "../../controllers/auth.js";
import { verifyToken } from "../../middlewares/authenticate.js";

const router = express.Router();

router.post("/register", upload.single("picture"), verifyToken, register);

router.post("/login", verifyToken,login);

export default router;

