const mongoose= require("mongoose")

const connectdb= async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/login")
        console.log("database is connected is successfully")
        
    } catch (error) {
        console.log(error.message)
        
    }
}


module.exports={
    connectdb
    
}