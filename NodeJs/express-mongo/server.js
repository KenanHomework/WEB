import express from "express"
import { config } from "dotenv"
import morgan from "morgan"
import parser from "body-parser"
import multer from "multer"
import path from "path"
import { productRouter } from "./routers/productsRouter.js"
import { user } from "./routers/userRouter.js"
import {rateLimit} from "express-rate-limit"
import { createConnection } from "./connection.js"
import mongoose from "mongoose";
config()
const PORT = process.env.PORT

const rateConfig = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 dq,
    limit: 5,
    standardHeaders: "draft-6",
    legacyHeaders: false,
    message: "<p>Express many requests</p>"
})



const directory =  path.join(process.cwd(), "uploads")

const upload = multer({dest: directory})

const server = express()
server.disable("x-powered-by")
server.use(rateConfig)
server.use(upload.single("file"))
server.use(parser.urlencoded({extended: false}))
server.use(express.json()) // Server middleware
server.use(morgan("combined"))

server.use("/", productRouter)
server.use("/user", user)



server.listen(PORT, async () => {
    await createConnection()
    console.log(`Server is running: http://localhost:${PORT}`)
})

