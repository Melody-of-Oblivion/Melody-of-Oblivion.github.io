function progbar(){
    var st = $(window).scrollTop(); // 距顶部距离
    var cr = $(window).height(); // 窗口高度
    var to = $(document.body).height(); // 总高度

    var percent = (st + cr) / to;
    if(percent > 1){percent = 1;}
    percent = (percent * 100) + '%'; // 计算百分比

    $('.progressbar').attr('style', 'width: ' + percent + ';');
}

$(document).ready(function(){progbar();}) // 网页加载时
$(document).scroll(function(){progbar();}) // 网页滚动时
