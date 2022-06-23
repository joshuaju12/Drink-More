require('dotenv').config();
const express = require('express');
const db = require('./db/index.js');
const controller = require('./controllers');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

app.post('/users', controller.postUser);

app.get('/users', controller.getUser);

app.put('/users', controller.updateUser);


app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
});

