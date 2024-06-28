import mongoose from "mongoose";


const connected : any  = {}

export const connection = async () =>{

    try {
        if (connected.isConnected) return 
        const dbConnected = await mongoose.connect('mongodb+srv://abdullahharshad003:Rk7zrSAdEwaXkYRE@cluster0.ivoc2ea.mongodb.net/dashboard-db')
        // console.log('database is connected, dbConnected' , dbConnected)
        console.log('db connected!')
        connected.isConnected = dbConnected.connections.values
        
    } catch (error) {
        console.log('this is the error ', error)
        // throw new Error(error)
    }  
}
connection()
