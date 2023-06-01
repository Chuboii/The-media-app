var swiper = new Swiper('#swiper1', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000, // Delay between slide changes (in milliseconds)
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination', // Target the pagination element
    clickable: true, // Enable clicking on pagination bullets to change slides
  },
  navigation: {
    nextEl: '.swiper-button-next', // Target the next button element
    prevEl: '.swiper-button-prev', // Target the previous button element
  },
  slidesPerView: 3, // Show 3 slides at once


  
  // breakpoints: {
  //   // Responsive breakpoints
  //   1200: {
  //     spaceBetween: 50, // Increase the spacing at 1200px screen width (typical desktop)
  //   },
  //   992: {
  //     spaceBetween: 40, // Increase the spacing at 992px screen width (typical tablet landscape)
  //   },
  //   768: {
  //     spaceBetween: 30, // Increase the spacing at 768px screen width (typical tablet portrait)
  //   },
  //   576: {
  //     spaceBetween:10, // Increase the spacing at 576px screen width (typical mobile portrait)
  //   },
  


  // },
});

var swiper = new Swiper('#swiper2', {
  direction: 'horizontal',
  slidesPerView: 1, // Show 3 slides at once


})