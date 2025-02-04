const swiper = new Swiper('.swiper',{
    slidePerView: 1,
    effect: "creative",
    creativeEffect: {
        prev:{
            translate: [0,0,-400],
        },
        next: {
            translate: ["100%",0,0],
        },
    },
    loop: true,
    direction: "horizontal",

    autoplay:{
        delay: 5000,
    },
    speed: 400,
    spaceBetween: 100,
})
const swiper2 = new Swiper('.swiper2',{
    slidesPerView: 3,
    spaceBetween: 35,
    slidePerGroup: 1,
    loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopfillGroupwithBlank: true,

    
    

    autoplay:{
        delay: 2000,
       
    },
    speed: 400,
  

    breakpoints: {
        // when window width is >= 320px
        280: {
          slidesPerView: 1,
        
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
      
        },
        // when window width is >= 640px
        968: {
          slidesPerView: 3,
     
        },
      },
});

const swiper3 = new Swiper('.swiper3',{
  slidesPerView: 2,
  spaceBetween: 35,
  slidePerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  
  

  autoplay:{
      delay: 2000,
     
  },
  speed: 400,


  breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
      
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
    
      },
      // when window width is >= 640px
      968: {
        slidesPerView: 2,
   
      },
    },
});
const swiper4 = new Swiper('.swiper4',{
  slidesPerView: 1,
  spaceBetween: 0,
  slidePerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  
  

  autoplay:{
      delay: 2000,
     
  },
  speed: 400,


  breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 1,
      
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1,
    
      },
      // when window width is >= 640px
      968: {
        slidesPerView: 1,
   
      },
    },
});