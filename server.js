'use strict';

const express = require('express');
const app = express();
const router = express.Router();


app.use(express.static('webpages'));

router.get('/admin', postDeadline);

function postDeadline() {

  console.log("intnrfn");
}

app.listen(process.env.PORT || 8080);
