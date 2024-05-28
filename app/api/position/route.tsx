import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const position = await prisma.position.findMany()
    return Response.json(position)
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    })
  }
}

export async function POST(req: Request) {
  try {
    const { name } = await req.json()
    const newPosition = await prisma.position.create({
      data: {
        name
      },
    })
    return Response.json(newPosition)
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    })
  }
}