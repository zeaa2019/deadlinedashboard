'use strict';

function init() {
  doFetchIt();
}

async function doFetchIt() {
	const response = await fetch('deadlines.json');
	const data = await response.json();

  for (const i of data.deadlines) {
    const li = document.createElement("li");
    li.textContent = JSON.stringify(i);
    window.listOfDeadlines.appendChild(li);
  }
}


window.addEventListener("load", init);
