import {z} from 'zod'


export const userSchemaValidation = z.object({
    username : z.string().min(1, 'username is Required').max(20),
    email : z.string().email('email is required'),
    password : z.string(),
    phone : z.number(),
    address : z.string().min(20, 'address is required').max(40),
    isAdmin : z.boolean(),
    isActive : z.boolean()
})