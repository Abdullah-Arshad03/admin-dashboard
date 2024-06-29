import { User } from "./userModel"
import { connection } from "./util"
 

export const fetchUsers = async (q : string) =>{
connection()
 const regex = new RegExp(q , 'i')
    try {
        const users = await User.find({username : {$regex : regex}})
        if(!users){
            throw new Error('users not found')
        }
        console.log('these are the users ', users)

        return users
    } catch (error) {
        console.log('error while fetching the users ', error)
        
    }
}