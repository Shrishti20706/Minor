const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Group22:%23acro1234@cluster0.39phrgu.mongodb.net/test").then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log('no connection');
})  
