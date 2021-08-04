const mongoose=require('mongoose');
const validator=require('validator');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id slready present"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unqiue:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;