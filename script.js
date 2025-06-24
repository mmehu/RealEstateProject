const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});


/* 
function show() {
    document.getElementById('sidebar').classList.toggle('active');
}
*/

/* slideshow */ 

let slideIndex = 0;
let slideTimeout;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (n !== undefined) {
    slideIndex = n;
  } else {
    slideIndex++;
  }

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  // Reset auto-slide on user interaction
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(() => showSlides(), 3500);
}

// Manual navigation
function plusSlides(n) {
  showSlides(slideIndex + n);
}

// Start slideshow
showSlides();

