const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// db connection
mongoose.connect('mongodb://isaac:123abc@ds161335.mlab.com:61335/chess-app', { useNewUrlParser: true, useUnifiedTopology: true });

// db models
require('./models/move');

// app routes
const moves = require('./api/moves');

// app middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname + '/client/build')));

// API v.1.0
app.use('/api/v1/moves', moves);

// serve index.html
if(process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    });
}

// server config
const port = process.env.PORT || 5000;
app.listen(port);

module.exports = app;