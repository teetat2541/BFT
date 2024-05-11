import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    const building = await prisma.building.findMany()
    return Response.json(building)
  
       
  }
  
  export async function POST(request: Request) {
    const {b_type,b_name,b_subdistrict,b_district,b_province} = await request.json()
    const newuser = await prisma.building.create({
        data:{
            b_type,
            b_name,
            b_subdistrict,
            b_district,
            b_province
        }
            
        
    })
    return Response.json(newuser)
}
        
      