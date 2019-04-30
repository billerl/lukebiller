$(document).ready(function(){
    if ($(window).width() < $(window).height()) {
         
    $(".btn").css( "font-size","100%" );
      $(".header").css( "font-size","150%" );
    $(".navbar").removeClass("right");
    $(".well").addClass( "text-center" );     
        } else {
          $(".btn").css( "font-size","100%" );
        }


/*$(window).resize(function(){
    if ($(window).width() < $(window).height()) {
   // alert('Less than 960 resize');       
    $(".btn").css( "font-size","100%" );
      $(".navbar").removeClass("right");
    $(".well").addClass( "text-center" );
      $(".header").css( "font-size","150%" );
        }else{
          $(".btn").css( "font-size","100%" );
          $(".navbar").addClass("right");
    $(".well").removeClass( "text-center" ); 
          $(".header").css( "font-size","170%" );
        }
    });*/

$( "#my-image" ).mouseenter(function() {
  $( "img" ).css( "filter","grayscale(100%)"  );
});

$( "#my-image" ).mouseleave(function() {
  $( "img" ).css( "filter","grayscale(0%)" );
});




$("#scrollToA").click(function() {
    $('html, body').animate({
        scrollTop: $("#accomplished").offset().top-130
    }, 1000);
});
$("#scrollToB").click(function() {
    $('html, body').animate({
        scrollTop: $("#bio").offset().top-130
    }, 1000);
});
$("#scrollToC").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top-130
    }, 1000);
});
});