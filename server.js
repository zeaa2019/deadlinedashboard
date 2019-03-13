'use strict';

const express = require('express');
const app = express();
const api = require('api');


app.use(express.static('webpages'));

app.listen(8080);
