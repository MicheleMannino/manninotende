$(document).click(function (event) {
    var target = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !target.hasClass("navbar-toggle")) {
        $navbar.collapse('hide');
    }
});