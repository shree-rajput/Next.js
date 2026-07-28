import { NextResponse } from "next/server";
import {user} from "@/utils/db"

export function GET(){
     const data = user;
     return NextResponse.json(data , {status : 200});    
}

export async function POST(request) {
  try {
    const payload = await request.json();

    console.log(payload);
      if(payload.name || !payload.age || !payload.email){
          return NextResponse.json({
               result : "Require fields not found" , success : false
          }, {status : 400});
          
      }
    return NextResponse.json({
      result: "success",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}