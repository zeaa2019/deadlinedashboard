'use strict';

const express = require('express');
const app = express();
const jsonfile = require('jsonfile');

app.use(express.static('webpages'));

app.use(express.urlencoded());

app.post('/api/deadline', (req, res) => {
  const cwTitle = req.body.cwTitle;
  const moduleName = req.body.moduleName;
  const cwDueDate = req.body.cwDueDate;

   // const file = 'webpages/deadlines.json';
   // const obj = { cwTitle: cwTitle, moduleName: moduleName, cwDueDate: cwDueDate };
   //
   // jsonfile.writeFile(file, obj, { flag: 'a' });
   

  res.redirect('http://localhost:8080/');
});


//port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
