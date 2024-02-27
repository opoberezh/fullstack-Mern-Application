import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "node:path";
import authRoutes from "./routes/api/auth.js";
import userRoutes from "./routes/api/users.js";
import postRoutes from "./routes/api/posts.js";
import { fileURLToPath } from "url";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";


dotenv.config();

const app = express();

// CONFIGURATIONS 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public', 'assets')));






// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// mongoose setup
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL).then(() =>
app.listen(PORT, () => {
  console.log("Database connection successful");
  console.log(`Server Port: ${PORT}`);

  // // ADD DATA ONE TIME
  // User.insertMany(users);
  // Post.insertMany(posts);
})
).catch((error) => console.log(`${error} did not connect`));

