$(function () {
  $(window).scroll(function () {
    if($(window).scrollTop())
      $('.header').addClass("black");
      else {
        $('.header').removeClass("black");
      }
        $('.Aboutme .textimage p').fadeIn(6000);
  });
});
