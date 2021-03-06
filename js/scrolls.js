var exists = false;
var anchors = []
$(document).ready(function() {
    var w = window.innerWidth;
    if (w >= 767) {
        var li = $("*[data-menuanchor]");
        for (var i = 0; i < li.length; i++) {
            anchor = li[i].attributes.getNamedItem('data-menuanchor');
            if (anchor != null) {
                anchors[i] = anchor.value;
            }
        }
        if (anchors == null) {
            anchors = false;
        }
    }
    build_multiscroll();
    if (w >= 767) {
        exists = true;
    } else {
        $.fn.multiscroll.destroy();
        document.getElementById('main').style.overflow = 'scroll';
        document.getElementsByTagName('html')[0].style.overflow = 'scroll';
        exists = false;
    }
});

$(window).resize(function () {
    var w = window.innerWidth;
    if (w >= 767){
        if (!exists) {
            $.fn.multiscroll.build();
            document.getElementById('main').style.overflow = 'hidden';
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
            exists = true;
        }
    } else {
        if (exists){
            $.fn.multiscroll.destroy();
            document.getElementById('main').style.overflow = 'scroll';
            document.getElementsByTagName('html')[0].style.overflow = 'scroll';
            exists = false;
        }
    }
});

function build_multiscroll() {
    $('#multiscroll').multiscroll({
        anchors: anchors,
        verticalCentered : true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: "#myMenu",
        sectionsColor: [],
        navigation: false,
        navigationPosition: 'right',
        navigationColor: '#000',
        navigationTooltips: [],
        loopBottom: false,
        loopTop: false,
        css3: false,
        paddingTop: 0,
        paddingBottom: 0,
        normalScrollElements: null,
        keyboardScrolling: true,
        touchSensitivity: 5,

        //responsive
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveExpand: false,

        // Custom selectors
        sectionSelector: '.ms-section',
        leftSelector: '.ms-left',
        rightSelector: '.ms-right',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
    });
}
