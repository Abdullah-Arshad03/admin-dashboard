import { revalidatePath } from "next/cache"
import { User } from "./userModel"
import { connection } from "./util"
import { redirect } from "next/navigation"
import * as bcrypt from 'bcrypt'
import { Product } from "./productModel"


export const addUser =async (formData:User[]):Promise<void> =>{
    'use server'
    const { username , email , password , phone, address, isAdmin ,isActive} = Object.fromEntries(formData)

    try {
        connection()

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)
   const users = await User.create({
    username : username, 
    email : email ,
    password : hashedPassword , 
    phone : phone , 
    address : address, 
    isAdmin : isAdmin,
    isActive : isActive
   })

   await users.save()
        
    } catch (error) {
        console.log('the users arent save using server action: ', error)
        throw error
        
    }

    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}


export const addProduct = async(formData:Product[]) : Promise<void>=>{
  'use server'
    const {title,price , color, category, stock , size , description } = Object.fromEntries(formData)



    try {
        connection()
        const product = await Product.create({
            title : title, 
            price : price , 
            color : color,
            category : category, 
            stock : stock,
            size : size ,
            description: description
        })

        await product.save()   

    } catch (error) {
        console.log('product aint created using the server actions', error)
        throw error
    }

    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}