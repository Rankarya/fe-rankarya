import express from 'express'
import dotenv from 'dotenv'
import db from './config/Database.js'
import cookieParser from 'cookie-parser'
import router from './routes/index.js'
import cors from 'cors'
dotenv.config()
const app = express()

try {
    await db.authenticate()
    console.log('connected to database....')
} catch (error) {
    console.error(error)
}

app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(3000, ()=> console.log('server running at port 3000'))