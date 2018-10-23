const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const keys = require('./config/keys');

//BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect with the DB
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch(err => {
    console.log(err);
  });

//Handlebar Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Laod Routes
const user = require('./routes/user');
const product = require('./routes/product');

//Index route
app.get('/', (req, res) => {
  res.render('index');
});

//Use routes
app.use('/user', user);
app.use('/product', product);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
