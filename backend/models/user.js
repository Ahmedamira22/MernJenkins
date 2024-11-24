import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type: String, 
        required: true
    },
    salary:{
        type:Number
    },
    phone:{
        type:String
    }
},{timestamps:true})
const  UserModels=mongoose.model("user",userSchema)

export default UserModels