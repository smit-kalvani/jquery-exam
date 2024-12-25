$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active');
    });

    $('nav a').click(function () {
        $('nav').removeClass('active');
    });
});
