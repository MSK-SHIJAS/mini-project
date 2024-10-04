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

const User=mongoose.model('user',userschema)
export default User