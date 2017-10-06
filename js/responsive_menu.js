var w = $(window).width();


$(document).ready(function () {
    w = $(window).width();
    if (w>=768) {
        mobile = false;
    } else {
        mobile = true;
    }
})

$(window).resize(function () {
    w = $(window).width();
    if (w>=768 && mobile) {
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
    } else {
        $('nav').removeClass('translated');
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
