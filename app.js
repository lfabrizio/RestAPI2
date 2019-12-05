const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
     { useNewUrUrlParser: true },  () => 
    console.log('Connected to DB!')
);
// start listening to server by..

app.listen(3000);