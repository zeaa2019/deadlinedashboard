'use strict';


function init() {
  getDeadlines();

}

//grabs deadlines stored from the server
async function getDeadlines() {
	const res = await fetch('deadlines.json');
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

window.addEventListener("load", init);
