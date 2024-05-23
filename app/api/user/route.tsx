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
            position,
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
        orderBy:{
            datestartwork:sort,
        }as any
    })
    return Response.json(user)
  
       
  }
  
  export async function POST(request: Request) {
    const {fname,lname,tel,position,salary,datestartwork} = await request.json()
    const newuser = await prisma.user.create({
        data:{
            fname,
            lname,
            tel,
            position,
            salary,
            datestartwork
        }
            
        
    })
    return Response.json(newuser)
}
        
      