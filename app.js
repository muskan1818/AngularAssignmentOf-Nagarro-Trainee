//express 
const express = require('express');
const app = new express();
var cors = require('cors')
var multer= require('multer');
var upload = multer();
//for path setting
const path = require('path');
const bodyParser = require('body-parser');

//routes
const troutes = require("./routes/troutes");
const authroutes = require("./routes/authroutes");
const sroutes = require("./routes/sroutes");

//port number
const port = 5000;

//static files and templates file path
const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/templates/views");


app.set("view engine", 'ejs');
app.set("views", templatePath);
app.use(express.static(staticPath));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json())
app.use(cors());
app.use(upload.array()); 
app.use("/teacher",troutes);
app.use("/",authroutes);
app.use("/student",sroutes);

app.listen(port, () =>
{
    console.log(`listening to the port ${port}`);
})