const connectToMongo = require('../db');
const cors = require('cors');
const express = require('express');
const app = express();
const serverless = require('serverless-http');

connectToMongo();

app.use(express.json());
app.use(cors());

require('dotenv').config();

app.get('/', (req, res) => {
    res.json({
        "where": "home"
    })
})
app.use('/.netlify/functions/api/auth', require('../routes/auth'));
app.use('/.netlify/functions/api/habit', require('../routes/habit'));

module.exports.handler = serverless(app);