
const express=require("express");
const path=require("path");

const app=express();
const hbs=require("hbs");
require("./db/conn");
const Register=require("./models/registers");
const{json}=require("express");
const port=process.env.PORT ||3000 ;
//to provide a port so that it can run where we host it
//3000 to run on our database
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../template/views");
const partials_path=path.join(__dirname,"../template/partials");
//console.log(path.join(__dirname,"../public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res) =>{
    res.render("index");
    // hellooooo nodemon is used to make changes automatically without running again and again -----this section is used to show when some error occured mainly
});

app.get("/register",(req,res)=>{
    res.render("register");
})

app.get("/login",(req,res)=>{
    res.render("login");
})

//create a new user in our database
app.post("/register",async(req,res)=>{
    try{
        const registerEmployee=new Register({
            user_name:req.body.user_name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            gender:req.body.gender
        })
        const registered=await registerEmployee.save();
        res.status(201).render("index");

    }catch(error){
        res.status(400).send(error);
    }
})


//login check
app.post("/login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        //console.log(`${email} and password is ${password}`)
        const useremail=await Register.findOne({email:email});
        //res.send(useremail.password); to show password correspond to that email
        if(useremail.password===password){
            res.status(201).render("index");
        }else{
            res.status("password are not matching");
        }
        console.log(useremail);

        //first email is database email and second is email of login

    }catch(error){
        res.status(400).send("invalid email");
    }

})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})