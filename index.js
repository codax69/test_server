import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.json({limit:"16kb"})); 
dotenv.config({
  path: ".env"
})
const port = process.env.PORT

app.get("/",(req,res)=>{
  res.json({"data":"hello user"})
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