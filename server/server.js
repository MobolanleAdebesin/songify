require('dotenv').config({path: '../.env'});

const parser = require('body-parser');
const cors = require('cors');
const express = require('express'); 
const app = express(); 


app.use(cors());

app.use(express.json());

const appRoutes = require('./routes/appRoutes'); 

app.use('/', appRoutes); 

app.listen(process.env.PORT || 4000, () => {
    console.log("Up and Running!"); 
});