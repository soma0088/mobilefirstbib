

//starting javascript code for mobilefirst responsive navigationbar 

function toggleMenu() {
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
      if (link.style.display === 'block') {
        link.style.display = 'none';
      } else {
        link.style.display = 'block';
      }
    });
  }
//End of Javascript for navigationbar 


  //start of Javascript for image carousel 

  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
  
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
  
    document.querySelector('.carousel-images').style.transform = 
      `translateX(-${currentIndex * 100}%)`;
  
  updateDots();
}
  
  function nextSlide() {
    showSlide(currentIndex + 1);
  }
  
  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function goToSlide(index) {
    showSlide(index);
  }
  
  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }
  
  // Initialize dots on load
  updateDots();
  

// End of Javascript for image carousel 



