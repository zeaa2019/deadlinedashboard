'use strict';

function init() {
  // verifies if the user has granted permission for notifactions to be sent
  if (Notification.permission === "granted") {
    // creates notifactions
    setTimeout(createWebDeadlines, 2000);
    setTimeout(createCosineDeadlines, 7000);
    setTimeout(createMathFunDeadlines, 12000);
    setTimeout(createAdProgDeadlines, 17000);
    setTimeout(createDsalgDeadlines, 22000);
  }

  //if the user has not granted permission, permission is asked for
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // once the user has granted permission, create a notifications
      if (permission === "granted") {
        setTimeout(createWebDeadlines, 2000);
        setTimeout(createCosineDeadlines, 7000);
        setTimeout(createMathFunDeadlines, 12000);
        setTimeout(createAdProgDeadlines, 17000);
        setTimeout(createDsalgDeadlines, 22000);
      }
    });
  }
}

function createWebDeadlines(){

  let showWebNotifications = document.getElementById("webScriptDeadlines");

  const deadlineTimeout1 = setTimeout(() => {
    let notification = new Notification("Literature Review is due on 16/11/19");
    let newNotification = document.createElement("li");
    newNotification.textContent = "Literature Review is due on 16/11/19";
    showWebNotifications.appendChild(newNotification);
}, 500);

  const deadlineTimeout2 = setTimeout(() => {
    let notification2 = new Notification("Security Essay is due in 11/01/2020");
    let newNotification2 = document.createElement("li");
    newNotification2.textContent = "Security Essay is due in 11/01/2020";
    showWebNotifications.appendChild(newNotification2);
  }, 2500);

  const deadlineTimeout3 = setTimeout(() => {
    let notification3 = new Notification("Website is due in 14/04/2020");
    let newNotification3 = document.createElement("li");
    newNotification3.textContent = "Website is due in 14/04/2020";
    showWebNotifications.appendChild(newNotification3);
  }, 4500);
}

function createCosineDeadlines(){

  let showCosineNotifications = document.getElementById("cosineDeadlines");

  const deadlineTimeout1 = setTimeout(() => {
  let notification = new Notification("Labook 1 is due on 15/10/19");
  let newNotification = document.createElement("li");
  newNotification.textContent = "Labook 1 is due on 15/10/19";
  showCosineNotifications.appendChild(newNotification);
 }, 1000);

  const deadlineTimeout2 = setTimeout(() => {
  let notification2 = new Notification("Labook 2 is due in 01/02/2020");
  let newNotification2 = document.createElement("li");
  newNotification2.textContent = "Labook 2 is due in 01/02/2020";
  showCosineNotifications.appendChild(newNotification2);
 }, 3000);

  const deadlineTimeout3 = setTimeout(() => {
  let notification3 = new Notification("Labook 3 is due in 14/03/2020");
  let newNotification3 = document.createElement("li");
  newNotification3.textContent = "Labook 3 is due in 14/03/2020";
  showCosineNotifications.appendChild(newNotification3);
}, 5000);
}

function createMathFunDeadlines(){
  let showMathsNotifications = document.getElementById("mathFunDeadlines");

  // creates notifactions
  const deadlineTimeout1 = setTimeout(() => {
  let notification = new Notification("Maths Coursework is due on 02/11/19");
  let newNotification = document.createElement("li");
  newNotification.textContent = "Maths Coursework is due on 02/11/19";
  showMathsNotifications.appendChild(newNotification);
 }, 1000);

  const deadlineTimeout2 = setTimeout(() => {
  let notification2 = new Notification("Haskell Coursework 1 is due in 10/01/2020");
  let newNotification2 = document.createElement("li");
  newNotification2.textContent = "Haskell Coursework 1 is due in 10/01/2020";
  showMathsNotifications.appendChild(newNotification2);
  }, 3000);

  const deadlineTimeout3 = setTimeout(() => {
  let notification3 = new Notification("Haskell Coursework 2 is due in 10/05/2020");
  let newNotification3 = document.createElement("li");
  newNotification3.textContent = "Haskell Coursework 2 is due in 10/05/2020";
  showMathsNotifications.appendChild(newNotification3);
 }, 5000);
}

function createAdProgDeadlines(){

  let showAdProgNotifications = document.getElementById("adProgDeadlines");

  // creates notifactions
  const deadlineTimeout1 = setTimeout(() => {
  let notification = new Notification("Java Coursework is due on 04/09/19");
  let newNotification = document.createElement("li");
  newNotification.textContent = "Java Coursework is due on 04/09/19";
  showAdProgNotifications.appendChild(newNotification);
  }, 1000);

  const deadlineTimeout2 = setTimeout(() => {
  let notification2 = new Notification("Lexical Analysis Essay in 22/03/2020");
  let newNotification2 = document.createElement("li");
  newNotification2.textContent = "Lexical Analysis Essay in 22/03/2020";
  showAdProgNotifications.appendChild(newNotification2);
 }, 3000);

  const deadlineTimeout3 = setTimeout(() => {
  let notification3 = new Notification("Programming Languages Essay is due in 18/05/2020");
  let newNotification3 = document.createElement("li");
  newNotification3.textContent = "Programming Languages Essay is due in 18/05/2020";
  showAdProgNotifications.appendChild(newNotification3);
  }, 5000);

}

function createDsalgDeadlines(){

  let showDsalgNotifications = document.getElementById("dsalgDeadlines");

  const deadlineTimeout1 = setTimeout(() => {
  let notification13 = new Notification("Hierarchical Data Structures Coursework is due on 05/12/19");
  let newNotification13 = document.createElement("li");
  newNotification13.textContent = "Hierarchical Data Structures Coursework is due on 05/12/19";
  showDsalgNotifications.appendChild(newNotification13);
  }, 1000);

  const deadlineTimeout2 = setTimeout(() => {
  let notification14 = new Notification("Linear Data Structures Coursework is due in 08/03/2020");
  let newNotification14 = document.createElement("li");
  newNotification14.textContent = "Linear Data Structures Coursework is due in 08/03/2020";
  showDsalgNotifications.appendChild(newNotification14);
  }, 3000);

  const deadlineTimeout3 = setTimeout(() => {
  let notification15 = new Notification("Hierarchical Data Structures Coursework Pt.2 is due in 30/05/2020");
  let newNotification15 = document.createElement("li");
  newNotification15.textContent = "Hierarchical Data Structures Coursework Pt.2 is due in 30/05/2020";
  showDsalgNotifications.appendChild(newNotification15);
  }, 5000);
}
window.addEventListener("load", init);
