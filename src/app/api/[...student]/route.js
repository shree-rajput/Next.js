import { NextResponse } from "next/server"

// export async function GET(reqeust , content){
//     console.log(content.params)
//     return new Response("all routes catched ")
// }

export async function GET(reqeust , content){
    console.log(content.params)
    return NextResponse.json({ message: "all routes catched" })
}