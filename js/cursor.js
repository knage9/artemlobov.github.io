document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle_cursor');

    // Проверяем, есть ли у элемента с классом 'circle_cursor' какие-либо пользовательские стили
    if (!circle.style.cssText) {
        window.addEventListener('mousemove', function(e) {
            circle.style.left = e.pageX + 'px';
            circle.style.top = e.pageY + 'px';
        });
    }
});