$(document).foundation();

$('.close-icon').click( function() {
	$('#header-menu').hide();
});

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
    $(".header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
  	$(".header").removeClass("active");
  }
});

$('.lgpd-warning .btn').click( function() {
  $('.lgpd-warning').hide();
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
});
