'use strict';


function init() {
  getDeadlines();

}

async function getDeadlines() {
	const res = await fetch('deadlines.json');
	const listDeadlines = await res.json();

  if(listDeadlines.deadlines.length >= 1){
    for (const x of listDeadlines.deadlines) {
      const li = document.createElement("li");
      li.textContent = JSON.stringify(x);
      window.listOfDeadlines.appendChild(li);

    }
  }
}



window.addEventListener("load", init);
