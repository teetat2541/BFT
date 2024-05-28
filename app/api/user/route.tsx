import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'

const prisma = new PrismaClient()

export async function GET(res:NextRequest) {
    const searchParams = res.nextUrl.searchParams
    const search = searchParams.get('search') || ''
    const position = searchParams.get('position')
    const sort = searchParams.get('sort') || 'desc'
    let whereCondition = position
        ? {
            position:{
              is:{
                name:position,
              },
            },
            fname:{
                contains:search
            },
        }
        :{
            fname:{
                contains:search
            },
        }

    const user = await prisma.user.findMany({
        where:whereCondition,
        include: {
          position: true, // Include category data in the response
        },
        orderBy:{
            id:sort,
        }as any
    })
    return Response.json(user)
  
       
  }
  
  export async function POST(request: Request) {
    const {fname,lname,tel,positionId,salary,datestartwork} = await request.json()
    const newuser = await prisma.user.create({
        data:{
            fname,
            lname,
            tel,
            positionId: Number(positionId),
            salary,
            datestartwork
        }
            
        
    })
    return Response.json(newuser)
}
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } },
  ) {
    try {
      return Response.json(await prisma.user.delete({
        where: { id: Number(params.id) },
      }))
    } catch (error) {
      return new Response(error as BodyInit, {
        status: 500,
      })
    }
  }
      