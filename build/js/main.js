function Slider(e){function n(e){l(t+=e)}function o(e){l(t=e)}function l(e){var n;for(e>i.length&&(t=1),e<1&&(t=i.length),n=0;n<i.length;n++)i[n].style.display="none";for(n=0;n<r.length;n++)r[n].className=r[n].className.replace(" slider__toggle--active","");i[t-1].style.display="block",r[t-1].className+=" slider__toggle--active"}var t=1,i=document.querySelectorAll(e.slideSelector),r=document.querySelectorAll(e.dotsSelector),a=document.querySelector(e.prevButtonSelector),s=document.querySelector(e.nextButtonSelector);a.addEventListener("click",function(){n(-1)}),s.addEventListener("click",function(){n(1)}),r.forEach(function(e,n){e.addEventListener("click",function(){o(n+1)})}),l(t)}var navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");navMain.classList.remove("main-nav--nojs"),navToggle.addEventListener("click",function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))});var loginForm=document.querySelector("#login-form"),loginFormLink=document.querySelector("#user-login"),overlay=document.querySelector(".modal-overlay"),loginFormCloseBtn=document.querySelector("#close-btn");loginForm.classList.remove("login-form--nojs"),loginFormLink.addEventListener("click",function(e){e.preventDefault(),loginForm.classList.contains("login-form--closed")&&(loginForm.classList.remove("login-form--closed"),loginForm.classList.add("login-form--opened"),overlay.style.display="block")}),loginFormCloseBtn.addEventListener("click",function(e){e.preventDefault(),loginForm.classList.contains("login-form--opened")&&(loginForm.classList.remove("login-form--opened"),loginForm.classList.add("login-form--closed"),overlay.style.display="none")}),overlay.addEventListener("click",function(){loginForm.classList.contains("login-form--opened")&&(loginForm.classList.remove("login-form--opened"),loginForm.classList.add("login-form--closed")),overlay.style.display="none"});var advantageSlider=new Slider({slideSelector:".advantages__item",dotsSelector:".advantages .slider__toggle",prevButtonSelector:".advantages .prev",nextButtonSelector:".advantages .next"}),reviewSlider=new Slider({slideSelector:".reviews__item",dotsSelector:".reviews .slider__toggle",prevButtonSelector:".reviews__prev",nextButtonSelector:".reviews__next"});