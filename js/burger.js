// $(document).ready(function(){
//     $(".header_burger").click(function(event){
//         $(".header_menu").toggleClass('active');
//         $(".header_burger").toggleClass('active');
//     });
// });

// const iconmenu = document.querySelector(".header_burger")
// if (iconmenu){
//     const menubody = document.querySelector(".header_menu")
//     iconmenu.addEventListener("click", function(e){
//         document.body.classList.toggle("lock");
//         iconmenu.classList.toggle("active");
//         menubody.classList.toggle("active");
//     });
// }

const iconmenu = document.querySelector(".header_burger");
if (iconmenu) {
    const menubody = document.querySelector(".header_menu");
    iconmenu.addEventListener("click", function(e) {
        document.body.classList.toggle("lock");
        iconmenu.classList.toggle("active");
        menubody.classList.toggle("active");
    });

    // Получаем все ссылки внутри бургер-меню
    const menuLinks = menubody.querySelectorAll("a[href^='#']");
    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            // Закрываем бургер-меню
            document.body.classList.remove("lock");
            iconmenu.classList.remove("active");
            menubody.classList.remove("active");

            // Получаем ID блока, к которому нужно перейти
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Прокручиваем страницу к целевому блоку
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}