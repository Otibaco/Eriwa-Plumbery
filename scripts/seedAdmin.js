import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });  // ✅ load env first

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

async function run() {
  if (!process.env.MONGODB_URI) throw new Error("MONGODB_URI missing");
  await mongoose.connect(process.env.MONGODB_URI);

  const username = "eriwa_admin"; // change if you want
  const plain = "admin123";       // change and KEEP SECRET

  const exists = await Admin.findOne({ username });
  if (exists) {
    console.log("Admin already exists:", username);
  } else {
    const hash = await bcrypt.hash(plain, 10);
    await Admin.create({ username, password: hash });
    console.log("✅ Admin created:", username);
  }

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
