'use strict';

function init() {
  getDeadlines();
}

//grabs deadlines stored from the server
async function getDeadlines() {
	const res = await fetch('storage.json');
	const listDeadlines = await res.json();
  const currentDate = new Date();

//iterates through json array of deadlines
  if(listDeadlines.deadlines.length >= 1){
    for (const x of listDeadlines.deadlines) {
      const cwDueDate = new Date (x.cwDueDate);
//checks that the deadline date has not passed
      if (cwDueDate > currentDate){
        const li = document.createElement("li");
        li.textContent = x.moduleName + ": " + x.cwTitle + " Due Date & Time: " + x.cwDueDate + " " + x.deadlineTime;
        window.listOfDeadlines.appendChild(li);
      }
    }
  }
}

function autoRefresh(time) {
	setTimeout("location.reload(true);",time);
}

window.onload = function() {
  init();
  //refreshes webpage every minute
  autoRefresh(60000);
};
