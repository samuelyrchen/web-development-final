/* This script will push a totification when 'Sign Up' button is click 
on registration page */

/* Initialize the variable 'formSubmit' as taking the object from 
html document with id name 'sign-up-submit' */
var formSubmit = document.getElementById("sign-up-submit");

/* Define the function that will push notification 
when the 'Sign Up' button is pressed */
function pushNotice() {
    alert('You have successfully sign up!');
}

// Call the function to push notification using addEventListener
formSubmit.addEventListener("click", pushNotice);