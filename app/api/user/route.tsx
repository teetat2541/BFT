import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const user = await prisma.user.findMany()
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
        
      