'use strict';

const express = require('express');
const app = express();

app.use(express.static('webpages'));



app.listen(8080);
