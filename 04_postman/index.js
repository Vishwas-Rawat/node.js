// Please install all modules before starting server so that you don't face any error
// if you don't know how to install please check videos present in insta page

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("This is home");
});

app.get("/bgmi", (req, res)=>{
    res.send("playing bgmi");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
