// I haven't started Javascript yet but I wanted to save this code that I found
// Thanks Andreas R https://www.sololearn.com/Profile/5332616
// https://code.sololearn.com/WI45Te2Agr2d/#js
// BEGIN CODE BELOW:

var timer;

function nextStep(progressBar) {
    if(document.getElementById(progressBar).value  >= 100) {
        document.getElementById(progressBar).value = 0;
    } else {
       document.getElementById(progressBar).value += 25;
       }
}

function startProgress() {
    timer = setInterval(function() { nextStep("dpBar"); }, 1000);
}

function stopProgress() {
    clearInterval(timer);
}
