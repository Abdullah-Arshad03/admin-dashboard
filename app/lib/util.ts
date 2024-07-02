import mongoose from "mongoose";
// import Router from "next/navigation";

const connected : any  = {}

export const connection = async () =>{

    try {
        if (connected.isConnected) return 
        const dbConnected = await mongoose.connect(process.env.MONGODB_URI)
        console.log('db connected!')
        connected.isConnected = dbConnected.connections[0].readyState
        console.log('checking it ', dbConnected.connections[0].readyState)
        
    } catch (error) {
        console.log('this is the error ', error)
        // throw new Error(error)
    }  
}
connection()
