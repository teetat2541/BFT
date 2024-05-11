import { readdir, readdirSync, writeFile, writeFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server"
import path from "path";

export async function GET() {
    const file = await readdirSync('./public/repair')
    return NextResponse.json({file})
}

export const POST = async (request:any)=>{
    const file = await request.formData();
    const image = file.get('image');
    const byteLegth = await image.arrayBuffer();
    const bufferData = await Buffer.from(byteLegth);
    const pathofImage = `./public/repair/${new Date().getTime()}${path.extname(image.name)}`
    writeFileSync(pathofImage,bufferData)
    console.log(pathofImage);
    
    return NextResponse.json({msg:"add complete"})
}

export async function DELETE(params:any) {
    const file = await readdirSync('./public/repair')

}