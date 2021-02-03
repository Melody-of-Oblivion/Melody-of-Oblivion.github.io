// to-top buttom & toptable display
$(document).ready(function() {
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $(".to-top").addClass("on");
                $(".toptable").css("position", "absolute")
            }
            else {
                $(".to-top.on").removeClass("on");
                $(".toptable").css("position", "fixed")
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
