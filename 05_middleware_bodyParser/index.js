// Please install all modules before starting server so that you don't face any error
// if you don't know how to install please check videos present in insta page

/* File Path to URL Converter
https://jsfiddle.net/StephenLujan/r6DYy/
*/

import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("import.meta.url = "+import.meta.url);
console.log("fileURLToPath(import.meta.url) = "+fileURLToPath(import.meta.url));
console.log("dirname(fileURLToPath(import.meta.url)) = "+dirname(fileURLToPath(import.meta.url)));

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
    console.log(req.body);
    res.send('Form submitted');
});

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});





