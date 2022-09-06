const mongoose = require('mongoose');
require('dotenv').config()
const mongoDB = process.env.MONGO_URI


mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
  console.log('connected')
});

//Get the default connection
const db = mongoose.connection;

const Schema = mongoose.Schema;


//Bind connection to error event (to get notification of connection errors)


