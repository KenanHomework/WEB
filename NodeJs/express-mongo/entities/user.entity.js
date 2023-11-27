import { createConnection } from "../connection.js"

const mongoose = await createConnection()

const UserScheme = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    bday: Number
})

export const User = mongoose.model("User", UserScheme)