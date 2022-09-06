const connectToMongo = require('./db');
const cors = require('cors');
connectToMongo();

const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

require('dotenv').config();

app.use('/api/auth', require('./routes/auth'));
app.use('/api/habit', require('./routes/habit'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Habit Tracker listening on ${PORT}`)
})
