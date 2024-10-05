import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String
    },
    userType:{
        type:String
    },
    userId:{
        type:mongoose.Types.ObjectId
    }
})

const User=mongoose.model('Pol',userschema)
export default User