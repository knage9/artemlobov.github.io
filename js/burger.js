$(document).ready(function(){
    $(".header_burger").click(function(event){
        $(".header_burger, nav, .lang, .header_btn").toggleClass('active');
        $("body").toggleClass("lock")
    });
});