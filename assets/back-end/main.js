// появление при пролистывании
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.nav-logo, .nav-socials, .nav-bar, .section-3-txt, .section-4-title, .section-5-txt, .flour-crop, .wheatseeds, .review-title`)
sr.reveal(`.header, .section-2-txt, .contact, .socials, .author`,{interval: 100})
sr.reveal(`.r-one, .one, .m-one, .m-seven`,{delay: 700})
sr.reveal(`.r-two, .two, .m-two, .m-eight`,{delay: 800})
sr.reveal(`.r-three, .three, .m-three, .m-nine`,{delay: 900})
sr.reveal(`.r-four, .four, .m-four, .m-ten`,{delay: 1000})
sr.reveal(`.r-five, .five, .m-five, .m-eleven`,{delay: 1100})
sr.reveal(`.r-six, .six, .m-six, .m-twelve`,{delay: 1200})
sr.reveal(`.arrow-down`,{delay: 1400})
sr.reveal(`.bread, .discount__img, .about-pic-1, .about-text-2`,{origin: 'left'})
sr.reveal(`.section-1-txt, .about-pic-2, .about-text-1`,{origin: 'right'})
sr.reveal(`.leaf, .coffeeleafseeds, .flour, .wheat`,{origin: 'bottom'})

// кнопка наверх
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// слайдер
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}