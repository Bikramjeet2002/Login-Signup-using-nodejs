const express= require("express")
const { createuser,getuser,getall } = require("../controller/user")

const userrouter= express.Router()

userrouter.post("/create",createuser)
userrouter.get("/login",getuser)
userrouter.get("/all",getall)

module.exports={
    userrouter

}