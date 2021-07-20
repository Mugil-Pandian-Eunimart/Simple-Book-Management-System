const express = require('express');
const app = express();

app.listen(PORT, function () {
    console.log("Server is running on PORT : "+process.env.PORT)
})