'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser  = require('body-parser');

app.use(express.static('webpages'));

app.use(bodyParser.urlencoded());

function storeDeadline (cwTitle, moduleName, cwDueDate, deadlineTime){
fs.readFile('webpages/storage.json', function(err, deadlinesStorage) {
  if (err) throw err

  let listOfDeadlines = JSON.parse(deadlinesStorage)
  listOfDeadlines.deadlines.push({
    cwTitle: cwTitle,
    moduleName: moduleName,
    cwDueDate: cwDueDate,
    deadlineTime: deadlineTime
  })

  fs.writeFile('webpages/storage.json', JSON.stringify(listOfDeadlines), function(err) {
    if (err) throw err
  })
})

}

app.post('/api/deadline', (req, res) => {
  const cwTitle = req.body.cwTitle;
  const moduleName = req.body.moduleName;
  const cwDueDate = req.body.cwDueDate;
  const deadlineTime = req.body.deadlineTime;

  storeDeadline(cwTitle, moduleName, cwDueDate, deadlineTime);


  res.redirect('http://localhost:8080/');
});



//port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
