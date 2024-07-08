import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
const app = express()
dotenv.config({
  path: ".env"
})
const port = process.env.PORT

app.get("/",(req,res)=>{
  res.send("hello web app..!")
})
app.get("/health",(req,res)=>{
    res.send("web app perfectly working..!")
})
connectDB().then(()=>{
  
  app.listen(port,()=>{
  console.log(port)
  })
}).catch((error)=>{
  console.log(`MongoDB Connection Failed`,error)
})