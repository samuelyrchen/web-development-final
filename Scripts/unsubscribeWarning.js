/* This script will push a warning notification when 'Unsubscribe' 
button is click on subscription page */

/* Initialize the variable 'unsubscribeBtns' array as taking the 
object from html document with class name 'unsubscribe-button' */
var unsubscribeBtns = document.getElementsByClassName("unsubscribe-button");

/* Define the function that will push warning notification 
when the 'Unsubscribe' button is pressed */
sendWarning = function() {
    alert('Do you want to unsubscribe this magazine?');
}

/* Call the function to push warning notification using addEventListener.
for any button with 'unsubscribe-button' class, once the button is click, 
window will pop up the warning message as sendWarning is called */
for(i = 0; i < unsubscribeBtns.length; i++) {
    unsubscribeBtns[i].addEventListener("click", sendWarning);
}




