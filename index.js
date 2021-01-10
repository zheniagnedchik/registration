const express = require('express')
const mongoose = require('mongoose')
const config =require('config')
const authRouter = require("./routes/auth.routes")
const corsMiddleware = require('./middleware/cors.midleware')


const app = express()
const PORT = process.env.PORT || config.get('serverPort')
app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)

const start = async() =>{

    await mongoose.connect(config.get('dbUrl'))
    try {
        app.listen(PORT,()=>{
            console.log('server startded on port ', PORT)
        })
    }catch(e){

    }
}
start()