import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
  if (isConnected) {
    console.log("using existing DB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "wd-compiler",
    });
    isConnected = true;
    console.log("connection established!");
  } catch (error) {
    console.log("error connecting to database:", error);
  }
};