// const express = require("express");
const mongoose = require("mongoose");
// const app = express();

mongoose.connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser : true,
    useUnifiedTopology : true
    // useCreateIndex : true,
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})


// app.listen(3000,()=>{
//     console.log("on port 3000!!!")
// })