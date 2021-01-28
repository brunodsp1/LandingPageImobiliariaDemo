var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dot");
  var dots2 = document.getElementsByClassName("dot2");
  if (n > slides.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
  dots2[slideIndex[n] - 1].className += " active";
}
