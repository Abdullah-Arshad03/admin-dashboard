import { User } from "./userModel"
import { connection } from "./util"
 

export const fetchUsers = async () =>{
connection()

    try {
        const users = await User.find()
        if(!users){
            throw new Error('users not found')
        }
        console.log('these are the users ', users)

        return users
    } catch (error) {
        console.log('error while fetching the users ', error)
        
    }
}