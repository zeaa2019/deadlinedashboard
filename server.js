'use strict';

const express = require('express');
const app = express();

app.use(express.static('webpages'));

app.get('/', function (req, res) {
  res.send('Hello World')
})



app.listen(8080);
