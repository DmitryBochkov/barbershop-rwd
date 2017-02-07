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

// Login-form
var loginForm = document.querySelector('#login-form');
var loginFormLink = document.querySelector('#user-login');
var overlay = document.querySelector('.modal-overlay');
var loginFormCloseBtn = document.querySelector('#close-btn');


loginForm.classList.remove('login-form--nojs');

loginFormLink.addEventListener('click', function(e) {
  e.preventDefault();
  if (loginForm.classList.contains('login-form--closed')) {
    loginForm.classList.remove('login-form--closed');
    loginForm.classList.add('login-form--opened');
    overlay.style.display = 'block';
  }
});
loginFormCloseBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (loginForm.classList.contains('login-form--opened')) {
    loginForm.classList.remove('login-form--opened');
    loginForm.classList.add('login-form--closed');
    overlay.style.display = 'none';
  }
});
overlay.addEventListener('click', function() {
  if (loginForm.classList.contains('login-form--opened')) {
    loginForm.classList.remove('login-form--opened');
    loginForm.classList.add('login-form--closed');
  }
  overlay.style.display = 'none';
});


function Slider(obj) {
  var slideIndex = 1;
  var slides = document.querySelectorAll(obj.slideSelector);
  var dots = document.querySelectorAll(obj.dotsSelector);
  var prevButton = document.querySelector(obj.prevButtonSelector);
  var nextButton = document.querySelector(obj.nextButtonSelector);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
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

  prevButton.addEventListener('click', function() {
    plusSlides(-1);
  });
  nextButton.addEventListener('click', function() {
    plusSlides(1);
  });
  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      currentSlide(index + 1);
    });
  });
  showSlides(slideIndex);
}
if (document.querySelector('.slider')) {
  console.log('test');
  var advantageSlider = new Slider({
    slideSelector: '.advantages__item',
    dotsSelector: '.advantages .slider__toggle',
    prevButtonSelector: '.advantages .prev',
    nextButtonSelector: '.advantages .next'
  });
  var reviewSlider = new Slider({
    slideSelector: '.reviews__item',
    dotsSelector: '.reviews .slider__toggle',
    prevButtonSelector: '.reviews__prev',
    nextButtonSelector: '.reviews__next'
  });
}
