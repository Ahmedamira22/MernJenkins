import express from 'express'
import dbCon from './utils/db.js';
import dotenv  from 'dotenv';
import cors from  "cors";
import routers from './routes/userRoutes.js';
dotenv.config()

const app=express()

dbCon()
app.use(express.json())
app.use(cors())
app.use('/api', routers)

app.listen(process.env.PORT,() =>{
    console.log('Server is running on port')
})