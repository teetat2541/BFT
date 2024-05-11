import { YEAR_VIEW } from '@mobiscroll/react/dist/src/core/shared/calendar-view/calendar-view.util.js'
import { formatDate, parseDate } from '@mobiscroll/react/dist/src/core/util/datetime.js'
import { PrismaClient } from '@prisma/client'
import { raw } from '@prisma/client/runtime/library'

const prisma = new PrismaClient()

export async function GET(req:Request,{params}:{params:{id:string}}){
    const userid = Number(params.id)
    const user:any|null = await prisma.user.findUnique({
        where:{id:userid}
    })
    
    
    
    return Response.json(user)
}

export async function PUT(req:Request,{params}:{params:{id:string}}){
    try {
        const {fname,lname,tel,position,salary,datestartwork} = await req.json()
        const userid = Number(params.id)
        const updateuser = await prisma.user.update({
            where:{id:userid},
            data:{
                fname,
                lname,
                tel,
                position,
                datestartwork,
                salary
            }
        })
        return Response.json(updateuser)
    } catch (error) {
        return new Response(error as BodyInit,{status:500,})
    }
}

export async function DELETE(req:Request,{params}:{params:{id:string}}){
    try {
        const userid = Number(params.id)
        const deleteuser = await prisma.user.delete({
            where:{id:userid}
        })
        return Response.json(deleteuser)
    } catch (error) {
        return new Response(error as BodyInit,{status:500,})
    }

}
