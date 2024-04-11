// Initialize Swiper
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// Handle click event for "READ MORE" buttons
$('.blog-slider__button').on('click', function(e) {
  e.preventDefault(); // Prevent default link behavior
  
  // Navigate to the next slide
  swiper.slideNext();
});
