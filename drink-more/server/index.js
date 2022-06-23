require('dotenv').config();
const express = require('express');
const client = require('./db/index.js');



const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
});


client.connect();