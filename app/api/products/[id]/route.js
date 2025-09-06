import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import Product from "@/models/Product";
import { requireAdmin } from "@/lib/auth-guard";

export async function GET(_req, { params }) {
  await connectDB();
  const item = await Product.findById(params.id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(req, { params }) {
  await connectDB();
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const update = await req.json();
  const item = await Product.findByIdAndUpdate(params.id, update, { new: true });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function DELETE(_req, { params }) {
  await connectDB();
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted" });
}
