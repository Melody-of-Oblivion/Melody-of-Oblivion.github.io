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

// page height adjust
$(document).ready(function(){
    var a = ($(window).height());
    var b = ($(document.body).height());
    if (a > b) {
        var height=document.getElementById("window");
        height.setAttribute("href","/assets/css/window.css");
    }
});
