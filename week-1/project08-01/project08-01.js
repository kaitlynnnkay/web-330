"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Kaitlyn Kelly
      Date:   10/25/25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
/* Constructor function for the timer object */
function Timer (min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

Timer.prototype.runPause = function(timer, minBox, secBox) {
  // Step 5
  // Test if the timer has a value
  if (this.timeID) {
    window.clearInterval(this.timeID);
    this.timeID = null;
  } else {
    this.timeID = window.setInterval(countdown, 1000);
  }

  // Step 6
  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds -= 1;
    } else if (timer.minutes > 0) {
      timer.minutes -= 1;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
}







/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Is this something about prototype chains?
let myTimer = new Timer(minBox.value, secBox.value);

minBox.onchange = function() {
  myTimer.minutes = minBox.value;
}

secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
}
