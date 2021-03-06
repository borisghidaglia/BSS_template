var w = $(window).width(),
    mobile;

$(document).ready(function () {
    w = window.innerWidth;
    if (w >= 767) {
        mobile = false;
    } else {
        mobile = true;
    }
});

$(window).resize(function () {
    w = window.innerWidth;
    if (w >= 767 && mobile) {
        location.hash = "";
        location.reload();
        mobile = false;
    } else if (w < 768 && !mobile) {
        location.hash = "";
        location.reload();
        mobile = true;
    }
});

function toggle_menu() {
    if (w <= 1200 && !$('nav').hasClass('translated')) {
        $('nav').addClass('translated');
        $('nav').css({
            'box-shadow' : '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        });
    } else {
        $('nav').removeClass('translated');
        $('nav').css({
            'box-shadow' : 'none'
        });
    }
}

// responsive sub menu
$('.wrap').click(function () {
    if (w <= 1200 && !$(this.children[1]).hasClass('wrapped')) {
        $(this.children[1]).addClass('wrapped');
    } else {
        $(this.children[1]).removeClass('wrapped');
    }
});
