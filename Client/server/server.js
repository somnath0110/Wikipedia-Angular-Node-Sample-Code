const express = require('express');
const path = require('path');
const app = express();
const port = 4500;


// Angular DIST output folder
app.use(express.static(path.join(__dirname, '../dist/cityapp')));

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../dist/cityapp/index.html'));
})

app.listen(port,()=>{
    console.log("server running on port "+port)
})