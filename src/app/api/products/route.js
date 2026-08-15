import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "@/config/db";
import { Product } from "@/lib/model/product";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
    console.log(data);
  } catch (e) {
    data = { result: "error" };
    success = false;
  }

  return NextResponse.json({
    result: data,
    success,
    message: "database connected successfully",
  });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(connectionSrt);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({
    result,
    success: true,
  });
}
