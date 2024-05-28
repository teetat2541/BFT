import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req:Request,{params}:{params:{id:string}}){
    const userid = Number(params.id)
    const user:any|null = await prisma.position.findUnique({
        where:{id:userid}
    })
    return Response.json(user)
}


export async function PUT(
  req: Request,
  { params }: { params: { id:any } }
) {
  try {
    const { name } = await req.json()
    const category = await prisma.position.update({
      where: { id: Number(params.id) },
      data: { name },
    })
    return Response.json(category)
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    return Response.json(
      await prisma.position.delete({
        where: { id: Number(params.id) },
      })
    )
  } catch (error) {
    return new Response(error as BodyInit, {
      status: 500,
    })
  }
}