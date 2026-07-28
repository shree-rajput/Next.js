import { NextResponse } from "next/server";
import {user} from "@/utils/db"

export function GET(){
     const data = user;
     return NextResponse.json(data , {status : 200});    
}
