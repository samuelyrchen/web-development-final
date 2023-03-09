/* This script generates a sorting function that allows 
client to filter the given magazines by category */


/* Define variable allMagazine to store the array 
from magazine with 'all' class */
var allMagazine = document.getElementsByClassName("all");
/* Define variable allScienceMagazine to store the array 
from magazine with 'science' class */
var allScienceMagazine = document.getElementsByClassName("science");
/* Define variable allFashionMagazine to store the array 
from magazine with 'fashion' class */
var allFashionMagazine = document.getElementsByClassName("fashion");
/* Define variable allGameMagazine to store the array 
from magazine with 'game' class */
var allGameMagazine = document.getElementsByClassName("game");

// Select 'all' button and assign it allButton
var allButton = document.getElementById("all-btn");
// Select 'science' button and assign it allScienceButton
var scienceButton = document.getElementById("science-btn");
// Select 'fashion' button and assign it allFashionButton
var fashionButton = document.getElementById("fashion-btn");
// Select 'game' button and assign it allGameButton
var gameButton = document.getElementById("game-btn");

/* Define a function clickAll that select all category 
of magazine, some for loops would be built since the lendth 
of the array can be gathered */
function clcikAll(){
    // Set the display style of 'science' class magazine to 'flex'
    for(i = 0; i < allScienceMagazine.length; i++){
        allScienceMagazine[i].style.display = "flex";
    }
    // Set the display style of 'fashion' class magazine to 'flex'
    for(i = 0; i < allFashionMagazine.length; i++){
        allFashionMagazine[i].style.display = "flex";
    }
    // Set the display style of 'game' class magazine to 'flex'
    for(i = 0; i < allGameMagazine.length; i++){
        allGameMagazine[i].style.display = "flex";
    }
}
/* Add an event lister to 'all' button, when the button is click, 
all of magazines with 'all' class would be shown */
allButton.addEventListener("click", clcikAll);

/* Define a function clickScience that select all science category 
of magazine, some for loops would be built since the lendth 
of the array can be gathered */
function clcikScience(){
    // Set the display style of 'science' class magazine to 'flex' since they are needed to display
    for(i = 0; i < allScienceMagazine.length; i++){
        allScienceMagazine[i].style.display = "flex";
    }
    // Set the display style of 'fashion' class magazine to 'none' since they are not needed
    for(i = 0; i < allFashionMagazine.length; i++){
        allFashionMagazine[i].style.display = "none";
    }
    // Set the display style of 'game' class magazine to 'none' since they are not needed
    for(i = 0; i < allGameMagazine.length; i++){
        allGameMagazine[i].style.display = "none";
    }
}
/* Add an event lister to 'science' button, when the button is click, 
all of magazines with 'science' class would be shown */
scienceButton.addEventListener("click", clcikScience);

/* Define a function clickFashion that select all fashion category 
of magazine, some for loops would be built since the lendth 
of the array can be gathered */
function clcikFashion(){
    // Set the display style of 'science' class magazine to 'none' since they are not needed
    for(i = 0; i < allScienceMagazine.length; i++){
        allScienceMagazine[i].style.display = "none";
    }
    // Set the display style of 'fashion' class magazine to 'flex' since they are needed to display
    for(i = 0; i < allFashionMagazine.length; i++){
        allFashionMagazine[i].style.display = "flex";
    }
    // Set the display style of 'game' class magazine to 'none' since they are not needed
    for(i = 0; i < allGameMagazine.length; i++){
        allGameMagazine[i].style.display = "none";
    }
}
/* Add an event lister to 'fashion' button, when the button is click, 
all of magazines with 'fashion' class would be shown */
fashionButton.addEventListener("click", clcikFashion);

/* Define a function clickCame that select all game category 
of magazine, some for loops would be built since the lendth 
of the array can be gathered */
function clcikGame(){
    // Set the display style of 'science' class magazine to 'none' since they are not needed
    for(i = 0; i < allScienceMagazine.length; i++){
        allScienceMagazine[i].style.display = "none";
    }
    // Set the display style of 'fashion' class magazine to 'flex' since they are not needed
    for(i = 0; i < allFashionMagazine.length; i++){
        allFashionMagazine[i].style.display = "none";
    }
    // Set the display style of 'game' class magazine to 'none' since they are needed to display
    for(i = 0; i < allGameMagazine.length; i++){
        allGameMagazine[i].style.display = "flex";
    }
}
/* Add an event lister to 'game' button, when the button is click, 
all of magazines with 'game' class would be shown */
gameButton.addEventListener("click", clcikGame);