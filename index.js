const express= require("express")
const dotenv= require("dotenv")
const app= express()

const { userrouter } = require("./routes/route")
const { connectdb } = require("./database/data")



dotenv.config()
connectdb()

app.use(express.json())
app.use("/",userrouter)

app.listen(process.env.PORT,()=>{
    console.log("port is runnung successfully")
})

