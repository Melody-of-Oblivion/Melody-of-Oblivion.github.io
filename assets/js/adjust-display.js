$(document).ready(function(){
    var a = ($(window).height());
    var b = ($(document.body).height());
    if (a > b) {
        var height=document.getElementById("window");
        height.setAttribute("href","/assets/css/window.css");
    }
});