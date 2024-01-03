// for fotos
console.log("H");
$(document).ready(function(){
    $('.slider-main').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        vertical: false,
        autoplaySpeed: 2000,
        asNavFor: '.slider-secondary'
    });
    $('.slider-secondary').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        dots: false,
        vertical: true,
        arrows: false,
        focusOnSelect: true
    });
});



// for product
console.log("H");
$(document).ready(function(){
    $('.slider-one').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        vertical: false,
        autoplaySpeed: 2000,
        asNavFor: '.slider-two'
    });
    $('.slider-two').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-one',
        dots: false,
        vertical: true,
        arrows: false,
        focusOnSelect: true
    });
});


// for service
console.log("H");
$(document).ready(function(){
    $('.sliders-one').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        vertical: false,
        autoplaySpeed: 2000,
        asNavFor: '.sliders-two'
    });
    $('.sliders-two').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sliders-one',
        dots: false,
        vertical: true,
        arrows: false,
        focusOnSelect: true
    });
});



var menuToggle = document.getElementById('menu-toggle');
var sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('show'); // Додаємо або видаляємо клас 'show' для бічної панелі
});
