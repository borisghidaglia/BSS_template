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

// responsive sub menu
$('.wrap').click(function () {
    if (w <= 1200 && !$(this.children[1]).hasClass('wrapped')) {
        $(this.children[1]).addClass('wrapped');
    } else {
        $(this.children[1]).removeClass('wrapped');
    }
});
