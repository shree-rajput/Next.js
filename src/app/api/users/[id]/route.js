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

export function POST(request) { 

  return NextResponse.json(
    {
      message: "User Added Successfully",
    },
    { status: 200 }
  );
}


export async function PUT(request, { params }) {
  const { id } = await params;  

  return NextResponse.json(
    {
      message: `User with id ${id} Updated Successfully`,

    },
    { status: 200 }
  );
}

export  function DELETE(request, content) {
  let id = content.params.id;

  if(id){
    return NextResponse.json({
      result : "user deleted successfully",
      success : true
    }, {status : 200})
  }else{
    return NextResponse.json({
      result : "user not found",
      success : false
    }, {status : 404})
  }
}
