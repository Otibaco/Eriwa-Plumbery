import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/connectDB";
import { signToken } from "@/lib/jwt";
import Admin from "models/Admin";

export async function POST(req) {
  try {
    await connectDB();
    const { username, password } = await req.json();

    // console.log("Login attempt:", { username, password });

    if (!username || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    const admin = await Admin.findOne({ username });
    // console.log("Found admin:", admin);

    if (!admin) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const ok = await bcrypt.compare(password, admin.password);
    // console.log("Password match result:", ok);

    if (!ok) {
      return NextResponse.json({ error: "Invalid credentials (wrong password)" }, { status: 401 });
    }

    const token = await signToken({ id: String(admin._id), username: admin.username });

    const res = NextResponse.json({ message: "Login successful" });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only secure in production
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;
  } catch (e) {
    console.error("Login error:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
