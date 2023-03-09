/* This script changes the blank background color when typing */
// Get the form using getElementById
var blankForm = document.getElementById("reg-form");

// When typing, the background turns to lightgray color
blankForm.addEventListener("focus", changeBackground = function(event) {
    event.target.style.background = "lightgray";
}, true);

// When switching, the background turns back to black
blankForm.addEventListener("blur", changeBackground = function(event) {
    event.target.style.background = "";
}, true);