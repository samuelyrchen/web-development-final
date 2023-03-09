/* This script generates numerical list of sample magazine 
and its description using a for loop */
/* This script generates an array of sample magazine images 
and their corresponding description paragraph using a for loop */

// Define a variable 'main' that makes it refer to 'main' tag in html page
const main = document.querySelector('main');

// Initialise sampleMagazine and assign it an empty value
let sampleMagazine = ``;

/* Build a for loop, use the sampleMagazine pass through the 
content of the tag strings */
for(i = 0; i < 7; i++){
    sampleMagazine += `<article class="sample-magazine">
    <img src="Assets/sampleMagazine.jpg" class="sampleMagazineImage">
    <!-- Notice: the content in 'new-book-description is just 
    a sample description of magazine copied from 
    'https://en.wikipedia.org/wiki/New!', 
    this is just an example place here. -->
    <p class="sample-magazine-description">New! is a British weekly magazine, specialising in celebrity news and is published by Reach plc, which also oversees OK! magazine, the Daily Mirror, Daily Express and Daily Star.</p>
    <button class="subscribe-button">Subscribe</button>
    </article>`;
}

// The main tag in html now has multiple elements
main.innerHTML = sampleMagazine;