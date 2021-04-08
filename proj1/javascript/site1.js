    $(function (){
      'Use Strict';
       $(document).ready(function () {
        $('.line1').slideDown(1000,function () {
          $('.social').slideDown(1000,function () {
            $('.line2').fadeIn(1000,function () {
              $('.text').slideDown(500);
            });
          });
        });
       });
    });
