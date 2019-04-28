'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

//serves static files
app.use(express.static('webpages'));

//handles encoded url data
app.use(bodyParser.urlencoded({ extended: true }));

//store deadlines from inputted from html form
function storeDeadline (cwTitle, moduleName, cwDueDate, deadlineTime){
fs.readFile('webpages/storage.json', function(err, deadlinesStorage) {
  if (err) throw err

//adds a new deadline to the list of deadlines from the JSON file
  let listOfDeadlines = JSON.parse(deadlinesStorage)
  listOfDeadlines.deadlines.push({
    cwTitle: cwTitle,
    moduleName: moduleName,
    cwDueDate: cwDueDate,
    deadlineTime: deadlineTime
  })
//writes to the JSON file the updated list of deadlines
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

//get the information that has been sent to the server
// and passes them to the a function to store them
  storeDeadline(cwTitle, moduleName, cwDueDate, deadlineTime);

  res.redirect('http://localhost:8080/');
});



//port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
