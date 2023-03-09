

var arr = ['Assets/subscrbedMagazine/image1.jpg', 'Assets/subscrbedMagazine/image2.jpg', 'Assets/subscrbedMagazine/image3.jpg', 'Assets/subscrbedMagazine/image4.jpg', 'Assets/subscrbedMagazine/image5.jpg']

const subscribeMagazine = document.querySelector('section');

let moreSubscribeMagazine = ``;

for(i = 0 ; 1 < arr.length; i++){
    moreSubscribeMagazine += `<article class="subscribed-magazine">
    <img src="${arr[i]}" class="subscribed-magazine-image">
    <p class="sample-magazine-description">Here is a short description for subscribed magazine.</p>
    <button class="unsubscribe-button">Unsubscribe</button>
</article>`;
}

subscribeMagazine.innerHTML = moreSubscribeMagazine;