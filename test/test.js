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

var slider = new Slider({
  slideSelector: '.advantages .slider__item',
  dotsSelector: '.advantages .slider__toggle',
  prevButtonSelector: '.advantages .prev',
  nextButtonSelector: '.advantages .next'
});
var slider1 = new Slider({
  slideSelector: '.feedback .slider__item',
  dotsSelector: '.feedback .slider__toggle',
  prevButtonSelector: '.feedback .prev',
  nextButtonSelector: '.feedback .next'
});
