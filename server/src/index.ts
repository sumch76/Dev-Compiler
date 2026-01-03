import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
import { userRouter } from "./routes/userRouter";
import cookieParser from "cookie-parser";

config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_URL || "http://localhost:5173", "https://dev-compiler-git-main-sumit-chaubeys-projects.vercel.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  })
);

app.use("/compiler", compilerRouter);
app.use("/user", userRouter);

dbConnect();

// Only listen if we are NOT in a Serverless environment
// Vercel sets VERCEL=1
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

export default app;