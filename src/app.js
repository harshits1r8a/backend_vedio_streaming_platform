import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// Middilewares
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
    credentials:true,
    preflightContinue: false
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true, limit:"20kb"}))
app.use(express.static("public"))//public means public file
app.use(cookieParser())



export { app }