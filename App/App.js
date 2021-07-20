const express = require('express');
var bodyParser = require("body-parser");
const BookRoute = require('./Routes/BookRoute');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/',BookRoute);

const PORT = 3000;

app.listen(PORT, function () {
    console.log("Server is running on PORT : "+PORT);
})