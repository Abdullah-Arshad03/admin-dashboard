import mongoose from "mongoose";
import { type } from "os";


const UserSchema = new mongoose.Schema({

    username : {
        type : String, 
        required : true , 
        unique : true, 
        min : 3,
        max : 20
    } , 
    email : {
        type : String, 
        required : true, 
        unique : true,
    }, 
    password : {
        type : String, 
        required : true
    }, 
    img : {
        type : String
    },
    isAdmin: {
        type : Boolean, 
        default : false
    }, 
    isActive : {
        type : Boolean, 
        default : true
    }, 
    phone : {
        type : Number, 
    },
    address : {
        type : String, 
        required : true
    }

}, {
    timestamps : true
})


export const User = mongoose.models.User || mongoose.model('User', UserSchema )