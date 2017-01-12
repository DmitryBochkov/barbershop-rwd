var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var slideIndex = 1;
var dots = document.querySelectorAll('.advantages .slider__toggle');
showSlides(slideIndex);

dots[0].addEventListener('click', function () {
  currentSlide(1);
  console.log(this);
});
dots[1].addEventListener('click', function () {
  currentSlide(2);
});
dots[2].addEventListener('click', function () {
  currentSlide(3);
});

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".advantages .slider__item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider__toggle--active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slider__toggle--active";
}
