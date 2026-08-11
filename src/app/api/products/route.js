import {NextResponse} from "next/server";
import mongoose from "mongoose";
import { connectionSrt } from "@/config/db";


export async function GET(){
        await mongoose.connect(connectionSrt);
        return NextResponse.json({result : true , message : "database connected successfully"})
}