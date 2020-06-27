$('html').ready(function() {
    $('.wrapper').removeClass('init');
});
$('li').on('click', function(ele) {
    $('li').removeClass('active');
    $(this).addClass('go');
    $(this).children().removeClass('change').children('.bg').addClass('tm').end().children('.title').addClass('left');
    $('.back').css('display', 'block');
});
$('.back').on('click', function() {
    $('.go').removeClass('go').addClass('active').children().addClass('change').children('.bg').removeClass('tm').end().children('.title').removeClass('left');
    $('li').not('.active').addClass('active');
    $('.back').css('display', 'none');
});