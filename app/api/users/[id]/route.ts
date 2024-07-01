import { NextRequest , NextResponse} from "next/server";
import { User } from "@/app/lib/userModel";
import { connection } from "@/app/lib/util";

interface Props {
    params : {
        id : string
    }
}
export async function DELETE(request : NextRequest , {params : {id}} : Props){

    console.log('this is the id of the user which is going to delete : ', id)

    try {
      const user = await User.findById(id)
     if(!user){
        return NextResponse.json({error : 'user not found'}, {status : 404})
     }

     const deleteUser = await User.deleteOne({_id : user._id})

     return NextResponse.json({
        message : 'user deleted',
        deleteUser : deleteUser

     } , {status : 200})
    } catch (error) {
        NextResponse.json({
            message : 'error in the catch of deleting func',
            error: error
        })
    }
}
