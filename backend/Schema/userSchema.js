
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('user',userSchema)