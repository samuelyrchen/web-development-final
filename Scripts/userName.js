/* This script refer the username to each page */

var src = document.getElementById("user-name").innerHTML;
var template = Handlebars.compile(src);
var rendered = template({username: "clientA"});
document.getElementById("target").innerHTML = rendered;