const express = require("express")
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userroutes")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/InterviewDB').then(()=>{
    console.log("DB has been connnected");
}).catch((e)=>{
    console.log("Error while connttinh to DB");
    
})



app.use(userRoutes)




app.listen(10000,()=>{
    console.log("Server is up at port no 10000");
    
})
