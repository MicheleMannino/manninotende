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
            var $navbar = $(".navbar-collapse");
            if (target.length) {
                var navbarHeight = 0;
                if (this.hash.indexOf('top') == -1)
                    navbarHeight = $('.navbar-header').height();
                $('html, body').animate({
                    scrollTop: target.offset().top - navbarHeight
                }, 1000, function() {
                    $navbar.collapse('hide');
                });
                return false;
            } else {
                $('html,body').animate({scrollTop: 0}, 'slow', function() {
                    $navbar.collapse('hide');
                });
                return false;
            }
        }
    });

    if (($(window).height() + 100) < $(document).height()) {
        $('#top-link-block').removeClass('hidden').affix({
            offset: {top:100}
        }).on('click', function() {
            $('html,body').animate({scrollTop: 0},'slow');
            return false;
        });
    }
})();