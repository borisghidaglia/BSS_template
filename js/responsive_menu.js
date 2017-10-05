var w = $(window).width();

$(document).ready(function () {
    w = $(window).width();
})

$(window).resize(function () {
    w = $(window).width();
});

function toggle_menu() {
    if (w <= 1200 && !$('nav').hasClass('translated')) {
        $('nav').addClass('translated');
    } else {
        $('nav').removeClass('translated');
    }
}
