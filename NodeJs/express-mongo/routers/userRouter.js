import express from "express"
import { User } from "../entities/user.entity.js"

export const user = express.Router()


user.post("/login", async (req, res)=> {
   const user = new User(req.body);
   await user.save()
   return res.status(200).send("Created")
})

user.get("/signup", async (req, res)=> {
    const users = await User.find({})
    for(let el of users){
        console.log(el.bday)
    }
    res.json(users)
})

user.get("/messages", (req, res)=> {
    res.send("user")
})

user.delete("/profile", (req, res)=> {
    res.send("user")
})