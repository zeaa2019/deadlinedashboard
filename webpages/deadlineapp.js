'use strict';

function init() {
    // creates notifactions
    createWebDeadlines();
    createCosineDeadlines();
    createMathFunDeadlines();
    createAdProgDeadlines();
    createDsalgDeadlines();
}

function createWebDeadlines(){
  let showWebNotifications = document.getElementById("webScriptDeadlines");
  let qrc1 = document.createElement("img");
  let qrc2 = document.createElement("img");
  let qrc3 = document.createElement("img");


    let newNotification = document.createElement("li");
    qrc1.src = "/images/litReviewQRC.png";
    qrc1.alt = "Literature Review QRC Code";
    newNotification.textContent = "Literature Review is due on 16/11/19";
    showWebNotifications.appendChild(newNotification);
    showWebNotifications.appendChild(qrc1);

    let newNotification2 = document.createElement("li");
    qrc2.src = "/images/securityEssayQRC.png";
    qrc2.alt = "Security Essay QRC Code";
    newNotification2.textContent = "Security Essay is due in 11/01/2020";
    showWebNotifications.appendChild(newNotification2);
    showWebNotifications.appendChild(qrc2);

    let newNotification3 = document.createElement("li");
    qrc3.src = "/images/websiteQRC.png";
    qrc3.alt = "Website QRC Code";
    newNotification3.textContent = "Website is due in 14/04/2020";
    showWebNotifications.appendChild(newNotification3);
    showWebNotifications.appendChild(qrc3);

}

function createCosineDeadlines(){
  let showCosineNotifications = document.getElementById("cosineDeadlines");
  let qrc1 = document.createElement("img");
  let qrc2 = document.createElement("img");
  let qrc3 = document.createElement("img");

  let newNotification = document.createElement("li");
  qrc1.src = "/images/labook1QRC.png";
  qrc1.alt = "Labook 1 QRC Code";
  newNotification.textContent = "Labook 1 is due on 15/10/19";
  showCosineNotifications.appendChild(newNotification);
  showCosineNotifications.appendChild(qrc1);

  let newNotification2 = document.createElement("li");
  qrc2.src = "/images/labook2QRC.png";
  qrc2.alt = "Labook 2 QRC Code";
  newNotification2.textContent = "Labook 2 is due in 01/02/2020";
  showCosineNotifications.appendChild(newNotification2);
  showCosineNotifications.appendChild(qrc2);

  let newNotification3 = document.createElement("li");
  qrc3.src = "/images/labook3QRC.png";
  qrc3.alt = "Labook 3 QRC Code";
  newNotification3.textContent = "Labook 3 is due in 14/03/2020";
  showCosineNotifications.appendChild(newNotification3);
  showCosineNotifications.appendChild(qrc3);

}

function createMathFunDeadlines(){
  let showMathsNotifications = document.getElementById("mathFunDeadlines");
  let qrc1 = document.createElement("img");
  let qrc2 = document.createElement("img");
  let qrc3 = document.createElement("img");

  // creates notifactions
  let newNotification = document.createElement("li");
  qrc1.src = "/images/mathsCWQRC.png";
  qrc1.alt = "Maths CW QRC Code";
  newNotification.textContent = "Maths Coursework is due on 02/11/19";
  showMathsNotifications.appendChild(newNotification);
  showMathsNotifications.appendChild(qrc1);

  let newNotification2 = document.createElement("li");
  qrc2.src = "/images/haskellCW1QRC.png";
  qrc2.alt = "Haskell CW 1 QRC Code";
  newNotification2.textContent = "Haskell Coursework 1 is due in 10/01/2020";
  showMathsNotifications.appendChild(newNotification2);
  showMathsNotifications.appendChild(qrc2);

  let newNotification3 = document.createElement("li");
  qrc3.src = "/images/haskellCW2QRC.png";
  qrc3.alt = "Haskell CW 2 QRC Code";
  newNotification3.textContent = "Haskell Coursework 2 is due in 10/05/2020";
  showMathsNotifications.appendChild(newNotification3);
  showMathsNotifications.appendChild(qrc3);

}

function createAdProgDeadlines(){

  let showAdProgNotifications = document.getElementById("adProgDeadlines");
  let qrc1 = document.createElement("img");
  let qrc2 = document.createElement("img");
  let qrc3 = document.createElement("img");

  // creates notifactions
  let newNotification = document.createElement("li");
  newNotification.textContent = "Java Coursework is due on 20/09/19";
  qrc1.src = "/images/javaCWQRC.png";
  qrc1.alt = "Java CW QRC Code";
  showAdProgNotifications.appendChild(newNotification);
  showAdProgNotifications.appendChild(qrc1);

  let newNotification2 = document.createElement("li");
  qrc2.src = "/images/lexicalEssayQRC.png";
  qrc2.alt = "Lexcical Essay QRC Code";
  newNotification2.textContent = "Lexical Analysis Essay in 22/03/2020";
  showAdProgNotifications.appendChild(newNotification2);
  showAdProgNotifications.appendChild(qrc2);

  let newNotification3 = document.createElement("li");
  qrc3.src = "/images/programLangEssayQRC.png";
  qrc3.alt = "Programming Languages Essay QRC Code";
  newNotification3.textContent = "Programming Languages Essay is due in 18/05/2020";
  showAdProgNotifications.appendChild(newNotification3);
  showAdProgNotifications.appendChild(qrc3);

}

function createDsalgDeadlines(){

  let showDsalgNotifications = document.getElementById("dsalgDeadlines");
  let qrc1 = document.createElement("img");
  let qrc2 = document.createElement("img");
  let qrc3 = document.createElement("img");

  let newNotification1 = document.createElement("li");
  qrc1.src = "/images/hierarchicalCWQRC.png";
  qrc1.alt = "Hierarchical DS CW QRC Code";
  newNotification1.textContent = "Hierarchical Data Structures Coursework is due on 05/12/19";
  showDsalgNotifications.appendChild(newNotification1);
  showDsalgNotifications.appendChild(qrc1);

  let newNotification2 = document.createElement("li");
  qrc2.src = "/images/linearCWQRC.png";
  qrc2.alt = "Linear DS CW QRC Code";
  newNotification2.textContent = "Linear Data Structures Coursework is due in 08/03/2020";
  showDsalgNotifications.appendChild(newNotification2);
  showDsalgNotifications.appendChild(qrc2);

  let newNotification3 = document.createElement("li");
  qrc3.src = "/images/hierarchical2CWQRC.png";
  qrc3.alt = "Hierarchical DS Pt2 CW QRC Code";
  newNotification3.textContent = "Hierarchical Data Structures Coursework Pt.2 is due in 30/05/2020";
  showDsalgNotifications.appendChild(newNotification3);
  showDsalgNotifications.appendChild(qrc3);
}

window.addEventListener("load", init);
