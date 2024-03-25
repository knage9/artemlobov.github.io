$(document).ready(function() {
    // Плавная прокрутка при использовании колеса мыши
    $(window).on('wheel', function(e) {
        e.preventDefault();
        var delta = e.originalEvent.deltaY;
        var scrollTime = 1000; // время прокрутки в миллисекундах
        var scrollDistance = 200; // дистанция прокрутки в пикселях
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() + (delta > 0 ? scrollDistance : -scrollDistance)
        }, scrollTime, 'easeOutQuint'); // 'easeOutQuint' - функция замедления
    });
});
