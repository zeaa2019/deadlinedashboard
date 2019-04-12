'use strict';


function init() {
  getDeadlines();
}

//grabs deadlines stored from the server
async function getDeadlines() {
	const res = await fetch('storage.json');
	const listDeadlines = await res.json();

//iterates through json array of deadlines
  if(listDeadlines.deadlines.length >= 1){
    for (const x of listDeadlines.deadlines) {
      const li = document.createElement("li");
      li.textContent = JSON.stringify(x);
      window.listOfDeadlines.appendChild(li);
    }
  }
}

function autoRefresh(time) {
	setTimeout("location.reload(true);",time);
}


window.onload = function() {
  //refreshes webpage every minute
  init();
  autoRefresh(60000);
};
