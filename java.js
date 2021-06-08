sliderSet();
 
function sliderSet(){
 
  var $slider = $('.bl_sliderBlock');
 
  $slider.each(function(index){
 
    $slider.slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    draggable: false,
    speed: 800,
    centerMode: true,
    pauseOnHover:false,
    dots: true,
    arrows: true,
    fade: false,
    variableWidth: false,
    prevArrow: '<div class="slider-arrow slider-prev"><img src=""></div>',
    nextArrow: '<div class="slider-arrow slider-next"><img src=""></div>',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerPadding: '0',
          centerMode: false,
          variableWidth: false,
        }
      }
    ],
  });
 
  });
}
