const mongoose=require("mongoose");
const employeeSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false,
        unique:false
    },
    phone:{
        type:String,
        required:false,
        unique:false
    },
    password:{
        type:String,
        required:false
    },
    gender:{
        type:String,
        required:false
    }
    

})

//now we need to create a collections

const Register=new mongoose.model("Register",employeeSchema);

module.exports=Register;
