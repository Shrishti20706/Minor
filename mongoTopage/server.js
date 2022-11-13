const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require("body-parser");

const app=express();
const ejs=require('ejs');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb+srv://Group22:%23acro1234@cluster0.39phrgu.mongodb.net/test');

const registersSchema={
    user_name:String,
    email:String,
    phone:String,
    password:String

}
const Register=mongoose.model('Register',registersSchema);

app.get('/',(req,res)=>{
    Register.find({},function(err,registers){
        res.render('indexx',{
            registersList:registers
        })
    })
})



app.get('/portfolio',(req,res)=>{
    Register.find({},function(err,registers){
        res.render("portfolio",{
            registersList:registers
        })
    })
})


app.listen(3000,function(){
    console.log('server is running');
})
app.get("/editfrom",(req,res)=>{
    res.render("editfrom");
})