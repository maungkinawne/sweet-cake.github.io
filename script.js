let search = document.querySelector('.search');
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bars').onclick = () => {
     navbar.classList.toggle('active');
};

document.querySelector('#search').onclick = () => {
     search.classList.toggle('active');
};



var swiper = new Swiper(".product-row", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });


  
var swiper = new Swiper(".blog-row", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      pagination:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
     },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 1,
        
      },
      1024: {
        slidesPerView: 1,
        
      },
    },
  });

  var swiper = new Swiper(".product-row", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });


  
var swiper = new Swiper(".review-row", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });