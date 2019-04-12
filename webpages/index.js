'use strict';

function init () {

  dateValidation();

}

function successMessage(){

  window.alert("Success: Deadline Sent to Deadline Dashboard");
}

function dateValidation() {

let currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

    if(day < 10){
        day = '0' + day;
    }
    if(month < 10){
        month='0' + month;
    }

currentDate = year + '-' + month + '-' + day;
document.getElementById("cwDueDate").setAttribute("min", currentDate);
 }

window.addEventListener("load", init);
