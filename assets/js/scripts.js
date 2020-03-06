// styles toggle
$(document).ready(function(){
    var stylechoice = $.cookie('stylecheck');
    if (stylechoice==1) styleToggle(1);
    if (stylechoice==2) styleToggle(2);
});
function btn1() {
    $.cookie('stylecheck', '1', { expires: 7, path: '/' });
    styleToggle(1);
}
function btn2() {
    $.cookie('stylecheck', '2', { expires: 7, path: '/' });
    styleToggle(2);
}
function styleToggle(sort) {
    var css=document.getElementById("style");
    if (sort==1) css.setAttribute("href","/assets/css/main-1.css");
    if (sort==2) css.setAttribute("href","/assets/css/main-2.css");
}

// to-top button
$(document).ready(function() {
    $(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $(".to-top").addClass("on");
        } else {
            $(".to-top.on").removeClass("on");
        }
    });
    $(".to-top").click(function() {
        $('body,html').animate({
             scrollTop: 0
        },
        300);
        return false;
    });
  });
});

// page height
$(document).ready(function(){
    var a = ($(window).height());
    var b = ($(document.body).height());
    if (a > b) {
        var height=document.getElementById("window");
        height.setAttribute("href","/assets/css/window.css");
    }
});
