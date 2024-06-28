import mongoose from "mongoose";


const prodModel = new mongoose.Schema({
    title : {
        type  : String , 
        required : true
    },
    price : {
        type : Number , 
        required: true,
        min : 0
    },
    color : {
        type : String, 
        required : true
    }, 
    size : {
        type : Number,
        required : true
    },
    stock : {
        type : Number , 
        required: true , 
        min : 0 
    },
    description : {
        type : String , 
        required : true
    }
}, {
    timestamps : true
})

export const Product = mongoose.models.Product || mongoose.model('Product' , prodModel)