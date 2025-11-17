import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

const connectToDatabase = async () => {
  if (!DB_URI) {
    console.warn(
      "Skipping MongoDB connection: DB_URI is not configured. Set DB_URI in your environment."
    );
    return;
  }

  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to database: ", error);

    process.exit(1);
  }
};

export default connectToDatabase;
