import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { limit } from './constatnts.js'

const app = express()

// Middilewares

// CORS orizon
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials:true,
    preflightContinue: false
}))

// used for take data from body/json
app.use(express.json({limit:limit}))

// used for take data from URL
app.use(express.urlencoded({extended:true, limit:limit}))

// used t set/acess/read the coocies of user's browser               
app.use(cookieParser())

app.use(express.static("public"))//public means public file

// router import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)



export { app }