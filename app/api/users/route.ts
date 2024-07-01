import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { userSchemaValidation } from "@/app/schemaValidation";
import { User } from "@/app/lib/userModel";
import * as bcrypt from 'bcrypt'
import { connection } from "@/app/lib/util";
import { getServerSession } from "next-auth";


export async function POST(request : NextRequest){
    
    console.log('this is teh server session ', getServerSession)
 
    try {
    connection()

        const body= await request.json()

        const validation = userSchemaValidation.safeParse(body)
        console.log('this is the validation object : ', validation)

        if(!validation.success){
            return NextResponse.json({
                message : 'validation failed',
                error : validation.error
            } , {
                status : 400
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(body.password , salt)

        console.log('this is the hashed pass ', hashedPassword)

        const user = await User.create({
            username : body.username,
            email : body.email,
            password : hashedPassword,
            phone : body.phone,
            address : body.address,
            isAdmin : body.isAdmin,
            isActive : body.isActive
        })
   
        const userCreated =  await user.save()

        return NextResponse.json(userCreated, {status : 200})
    } catch (error) {
       console.log('error')
    }
}
