const mongoose= require("mongoose")

const usermodel=mongoose.Schema({
    username:String,
    password:String
})


const user = mongoose.model("login",usermodel)

module.exports={
    user
}