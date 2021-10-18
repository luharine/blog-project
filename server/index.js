const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const app= express();

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
   
  }).then(console.log("Connected to MongoDB")).catch(err=>{
    console.log(err)
});

app.use("/routes/auth",authRoute);
app.use("/routes/users",usersRoute);
app.use("/routes/posts",postRoute)

app.listen("5000",()=>{
    console.log("Server is running");
});
