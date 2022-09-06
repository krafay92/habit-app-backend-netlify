const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURI = "mongodb://localhost:27017/habit-app";

const mongoURI = process.env.DATABASE
const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected Successfully");
    }).catch(err => {
        console.log(console.log(err, "Connection Failed")
        )
    })
}

module.exports = connectToMongo;