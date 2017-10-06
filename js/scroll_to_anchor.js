$('#myMenu a').click(function () {
    if(w < 768){
        var hash = $(this).attr('href');
        hash = hash.replace('#','');
        obj = document.getElementById(hash);
        header_height = window.getComputedStyle(document.getElementsByTagName('header')[0]).height;
        header_height = header_height.replace('px','');
        console.log(header_height);
        if (obj) {
            scrollValue = $(obj).offset().top;
            $('body,html').animate({
                'scrollTop' :scrollValue - header_height,
            },600,'swing');
        }
    }
});
