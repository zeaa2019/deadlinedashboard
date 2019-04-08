'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('webpages'));

app.use(express.urlencoded());

function storeDeadline (cwTitle, moduleName, cwDueDate){
fs.readFile('webpages/deadlines.json', function(err, deadlinesStorage) {
  if (err) throw err

  let listOfDeadlines = JSON.parse(deadlinesStorage)
  listOfDeadlines.deadlines.push({
    cwTitle: cwTitle,
    moduleName: moduleName,
    cwDueDate: cwDueDate
  })

  fs.writeFile('webpages/deadlines.json', JSON.stringify(listOfDeadlines), function(err) {
    if (err) throw err
  })
})
}

app.post('/api/deadline', (req, res) => {
  const cwTitle = req.body.cwTitle;
  const moduleName = req.body.moduleName;
  const cwDueDate = req.body.cwDueDate;

  console.log(moduleName);

  storeDeadline(cwTitle, moduleName, cwDueDate);

  res.redirect('http://localhost:8080/');
});

//port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
