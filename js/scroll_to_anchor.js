$(document).ready(function () {
    var hash = location.hash;
        data_ma = $("*[data-mobile-anchor]");
        mob_anchors = []

    data_ma.each(function () {
        mob_anchors.push($(this).attr('data-mobile-anchor'));
    });

    scroll_to_anchor(hash);
});

window.onhashchange = scroll_to_anchor;

$('#myMenu a').click(function () {
    var hash = $(this).attr('href');
    scroll_to_anchor(hash);
});

function scroll_to_anchor(hash) {
    if (typeof(hash) != 'string') {
        hash = location.hash;
    }
    if(w < 768 && hash != ""){
        hash = hash.replace('#','');
        obj = document.getElementById(hash);
        if (!obj) {
            data_ma.each(function () {
                if (hash == $(this).attr('data-mobile-anchor')) {
                    obj = this;
                }
            });
        }
        header_height = window.getComputedStyle(document.getElementsByTagName('header')[0]).height;
        header_height = header_height.replace('px','');
        if (obj) {
            scrollValue = $(obj).offset().top;
            $('body,html').animate({
                'scrollTop' :scrollValue - header_height,
            },600,'swing');
        }
    }
}
