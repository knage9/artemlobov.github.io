window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.img_anim');
    
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // проверка, находится ли элемент в области просмотра
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('animate__animated', 'animate__zoomIn');
            element.style.visibility = 'visible';
        }
    });
});

// Вызов события scroll для инициализации анимации при загрузке страницы
window.dispatchEvent(new Event('scroll'));