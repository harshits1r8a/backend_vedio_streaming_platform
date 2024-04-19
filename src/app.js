import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { limit } from './constatnts'

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

app.use(express.json({limit:limit}))
app.use(express.urlencoded({extended:true, limit:limit}))
app.use(express.static("public"))//public means public file
app.use(cookieParser())



export { app }