import { NextResponse } from "next/server";
import { user } from "@/utils/db";

export async function GET(request, { params }) {
  const { id } = await params;

  console.log(id); // 30

  return NextResponse.json(
    {
      id,
      data: user,
    },
    { status: 200 }
  );
}