import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  // If already connected or connecting, skip reconnect
  if (mongoose.connection.readyState === 1) {
    console.log("🔄 Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(uri, {
      bufferCommands: false,
    });
    console.log("✅ MongoDB connected:", mongoose.connection.name);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
};
