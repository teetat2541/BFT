import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import { writeFileSync } from "fs";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
  const formData = await request.formData();
  const image = formData.get("image") as File;

  if (!image) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  const building = formData.get("building") as string;
  const location = formData.get("location") as string;
  const description = formData.get("description") as string;

  const imagePath = `./public/repair/${Date.now()}${path.extname(image.name)}`;
  const buffer = Buffer.from(await image.arrayBuffer());
  writeFileSync(imagePath, buffer);

  try {
    await prisma.repair.create({
      data: {
        building,
        location,
        description,
        imagePath,
      },
    });
  } catch (error) {
    console.error("Error creating repair record:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

  return NextResponse.json({ msg: "add complete" });
};
