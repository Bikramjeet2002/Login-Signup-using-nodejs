const {user}= require("../model/user")

const createuser= async(req,res)=>{
    try {
        const{username,password}= req.body
        if(await user.findOne({username:username})){
            res.send("already exists")
        }
        else{
            const create= await user.create({
                username:username,
                password:password
            })
            res.send(create) 
        }

    } catch (error) {
        res.send(error.message)
        
    }
}
const getall= async(req,res)=>{
    res.send(await user.find({}))
}

const getuser= async(req,res)=>{
    try {
        const {username,password}=req.body
         if(await user.findOne({
                username:username,
                password:password
            
        }))
        res.send('login successfully')
        else{
            res.send("create user first")
        }
    } catch (error) {
        res.send(error.message)
        
    }
}



module.exports={
    createuser,
    getuser,
    getall
}