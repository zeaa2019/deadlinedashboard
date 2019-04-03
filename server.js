'use strict';

const express = require('express');
const app = express();

const router = express.Router();


app.use(express.static('webpages'));



app.listen(process.env.PORT || 8080);

console.log("localhost:8080");
