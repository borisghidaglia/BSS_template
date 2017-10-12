function readmore(elt,left) {
    section = $(elt.closest('.ms-section'));

    var animation = "";
    if (left) {
        animation = '100%';
    } else {
        animation ="-100%";
    }

    if (!section.hasClass('read')) {
        section.css({
              "z-index": "999"
        });
        section.animate({
            'left' : animation
        },400, function() {
            section.addClass('read');
            $.fn.multiscroll.destroy();
        });
    } else {
        section.animate({
            "left" : "0"
        }, 400, function() {
            section.removeClass('read');
            section.css({
                "z-index": "auto"
            });
            $.fn.multiscroll.build();
        });
    }

}

function readmoreMobile(elt) {
    var section = elt.closest('.background-container');
        readmore = $(section.children[1]);
    if (readmore.css('display') == 'none') {
        readmore.show();
    } else {
        readmore.hide();
    }
}
