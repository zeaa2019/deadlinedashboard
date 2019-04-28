'use strict';

function init () {
  dateValidation();
}

//shows an alert on the homepage when a deadline has successfully been submitted
function successMessage(){
  window.alert("Success: Deadline Sent to Deadline Dashboard");
}

//gets the present date & sets the min attribute on the form to that date
function dateValidation() {

let currentDate = new Date();
const year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

    if(day < 10){
        day = '0' + day;
    }
    if(month < 10){
        month ='0' + month;
    }

currentDate = year + '-' + month + '-' + day;
document.getElementById("cwDueDate").setAttribute("min", currentDate);
}
//when the page is loaded the init function is called
window.addEventListener("load", init);
