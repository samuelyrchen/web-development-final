//This script implies the changing of the font size

//change the font size of the page to small size
document.getElementById("changeToSmall").onclick = function(){
    sizeChange("smallSize");
}
//change the font size of the page to medium size
document.getElementById("changeToMedium").onclick = function(){
    sizeChange("mediumSize");
}
//change the font size of the page to large size
document.getElementById("changeToLarge").onclick = function(){
    sizeChange("largeSize");
}

//select the body tag to make sure everything in it can alter the sizes
function sizeChange(object) {
    document.getElementsByTagName("body")[0].className = object
}