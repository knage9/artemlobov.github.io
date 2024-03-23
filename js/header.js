$(document).ready(function() {
    var lastScrollTop = 0;
    var headerHeight = $('#header').outerHeight();

    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 300) {
            // Скролл вниз
            $('#header').css('transform', 'translateY(-200%)');
        } else {
            // Скролл вверх
            $('#header').css('transform', 'translateY(0)');
        }
        lastScrollTop = st;

        // Обновление progress bar
        var winHeight = $(window).height();
        var docHeight = $(document).height();
        var progress = (st / (docHeight - winHeight)) * 100;
        $('#progress-bar').css('width', progress + '%');
    });
});