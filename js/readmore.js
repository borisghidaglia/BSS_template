function readmore(elt) {
    // more = elt.parentNode.parentNode.parentNode.children[1];
    desktop = document.getElementById('main-desktop');
    mobile = document.getElementById('main-mobile');
    if (window.getComputedStyle(desktop).display == "block") {
        if (!$(desktop).hasClass('slide-left')) {
            $(desktop).addClass('slide-left');
        } else {
            $(desktop).addClass('translated');
            $(desktop).removeClass('slide-left');
            $(desktop).removeClass('translated');
        }
    }

    if (window.getComputedStyle(mobile).display == "block") {
        if (!$(mobile).hasClass('translate-left')) {
            $(mobile).addClass('translate-left');
        } else {
            $(mobile).removeClass('translate-left');
        }
    }
}
