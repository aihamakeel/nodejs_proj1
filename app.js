const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares----------------------------------
app.use(cors());
app.use(bodyParser.json());

//import routes--------------------------------
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);

//Routes---------------------------------------
app.get('/',(req,res) => {
    res.send('We are on home');
});

//connect to db--------------------------------
mongoose.connect(process.env.LOCAL_DB,
{ useNewUrlParser: true , useUnifiedTopology: true }
).then(()=> console.log('Connectd to DB!')
).catch(err=>{
    console.error(err);
});

//Start listening server----------------------
app.listen(3000);
