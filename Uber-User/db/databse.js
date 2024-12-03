const mongoose=require("mongoose");

function connect(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("User service Connected to MongoDB!");

    }).catch(err=>{
        console.log(err);
        
    });
}
module.exports=connect;