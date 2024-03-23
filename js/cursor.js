document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle_cursor');

    window.addEventListener('mousemove', function(e) {
        circle.style.left = e.pageX + 'px';
        circle.style.top = e.pageY + 'px';
    });
});