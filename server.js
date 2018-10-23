const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');


//Connect with the DB
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
.then(() => {
  console.log('connected to MongoDB')
})
.catch(err => {
  console.log(err);
})


app.get('/', (req, res) => {
  res.send('home screen');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
})
