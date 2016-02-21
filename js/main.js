(function() {
    $(document).on('click', function (event) {
        var target = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !target.hasClass("navbar-toggle")) {
            $navbar.collapse('hide');
        }
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - $('.navbar-header').height() - 50
                }, 1000);
                return false;
            }
        }
    });

    if (($(window).height() + 100) < $(document).height()) {
        $('#top-link-block').removeClass('hidden').affix({
            offset: {top:100}
        }).on('click', function() {
            $('html,body').animate({scrollTop:0},'slow');
            return false;
        });
    }
})();