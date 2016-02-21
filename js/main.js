(function() {
    $(document).on('click, touchstart', function (event) {
        var target = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !target.hasClass("navbar-toggle")) {
            $navbar.collapse('hide');
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