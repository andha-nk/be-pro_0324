window.addEventListener('DOMContentLoaded', function(){
/**
 * Toggle
 */
$('.js-openButton').on('click', function () {
    $(this).toggleClass('is-active');
    $('.l-nav').toggleClass('is-active').fadeToggle();
});

/**
 * menuToogle Bugfix
 * @type {MediaQueryList}
 */
var mediaQuery = window.matchMedia('(min-width: 768px)');
function handleTabletChange(e) {
    if (e.matches) {
        // console.log('PC size');
        $('.l-nav').show();
    } else if (!e.matches) {
        // console.log('SP size');
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);


/**
 * Scroll Control
 * @type {*|jQuery|HTMLElement}
 */
var $pagetop = $('.js-pagetop'),
    $header = $('.l-header'),
    $height = $(window).height();

/**
 * scroll flag
 */
$(window).on('scroll', function () {
    if ($(this).scrollTop() < $height) {
        $header.removeClass('is-scroll');
        $pagetop.fadeOut();
    } else {
        $header.addClass('is-scroll');
        $pagetop.fadeIn();
    }
});

/**
 * smooth scroll
 */
$pagetop.on('click', function () {
    $('html, body').animate({scrollTop: 0}, 500);
});
});
