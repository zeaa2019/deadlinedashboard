'use strict';

const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('webpages'));

app.use(express.urlencoded());

// function clearOldDeadlines() {
//   let currentDate = new Date();
//   let year = currentDate.getFullYear();
//   let day = currentDate.getDate();
//   let month = currentDate.getMonth() + 1;
//
//   if(day < 10) {
//     day = '0'+ day
//   }
//
//   if(month<10) {
//     month = '0' + month
//   }
//
//   currentDate = year + '-' + month + '-' + day;
//   fs.readFile('webpages/deadlines.json', function(err, deadlinesStorage) {
//   let listDeadlines = JSON.parse(deadlinesStorage)
//     if (err) throw err
//
//       for (const x of listDeadlines.deadlines) {
//           let deadline = x.cwDueDate;
//             if(deadline < currentDate){
//               listDeadlines.deadlines.splice(listDeadlines.deadlines.indexOf(x), 1);
//               console.log(JSON.stringify(x));
//               console.log(JSON.stringify(listDeadlines.deadlines));
//           }
//         }
//         // fs.writeFileSync('webpages/deadlines.json', JSON.stringify(listDeadlines), function(err) {
//         //   if (err) throw err
//         //   })
//     })
//
// }

function storeDeadline (cwTitle, moduleName, cwDueDate){
fs.readFile('webpages/storage.json', function(err, deadlinesStorage) {
  if (err) throw err

  let listOfDeadlines = JSON.parse(deadlinesStorage)
  listOfDeadlines.deadlines.push({
    cwTitle: cwTitle,
    moduleName: moduleName,
    cwDueDate: cwDueDate
  })

  fs.writeFile('webpages/storage.json', JSON.stringify(listOfDeadlines), function(err) {
    if (err) throw err
    console.log("wo");
  })
})
  //clearOldDeadlines();
}

app.post('/api/deadline', (req, res) => {
  const cwTitle = req.body.cwTitle;
  const moduleName = req.body.moduleName;
  const cwDueDate = req.body.cwDueDate;

  storeDeadline(cwTitle, moduleName, cwDueDate);

  res.redirect('http://localhost:8080/');
});



//port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
