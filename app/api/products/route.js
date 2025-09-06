import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { requireAdmin } from "@/lib/auth-guard";
import Product from "models/Product";

export async function GET() {
  await connectDB();
  const list = await Product.find().sort({ createdAt: -1 });
  return NextResponse.json(list);
}

export async function POST(req) {
  await connectDB();
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const created = await Product.create(body);
  return NextResponse.json(created, { status: 201 });
}
