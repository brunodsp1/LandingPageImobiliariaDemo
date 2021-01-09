var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(m) {
  showSlides2((slideIndex2 += m));
}

// Thumbnail image controls
function currentSlide2(m) {
  showSlides2((slideIndex2 = m));
}

function showSlides(m) {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {
    slideIndex2 = 1;
  }
  if (m < 1) {
    slideIndex2 = slides2.length;
  }
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  for (j = 0; j < dots.length; j++) {
    dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
}
