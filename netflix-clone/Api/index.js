const express = require('express');
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()


mongoose.connect(process.env.MONG_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("connection with db established")
    }).catch((err)=>{console.log("no connection")})

app.listen(3000, ()=>{
    console.log("server is up")
})