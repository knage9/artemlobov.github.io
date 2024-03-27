
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();

        // проверка, находится ли элемент в области просмотра
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
            element.style.visibility = 'visible';
        }
    });
});
