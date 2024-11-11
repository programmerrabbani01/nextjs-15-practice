import mongoose from "mongoose";

// Create MongoDB connection
export const mongoDBConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("MongoDB connection successful");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unknown error occurred during MongoDB connection.");
    }
  }
};
