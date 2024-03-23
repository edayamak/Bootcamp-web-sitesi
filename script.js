
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll("#portfolio article");
    const totalSlides = slides.length;
    let currentIndex = 0;
  
   
    showSlide(currentIndex);
  
   
    setInterval(nextSlide, 5000); 
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.style.display = "block";
        } else {
          slide.style.display = "none";
        }
      });
    }
  });
  