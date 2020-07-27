window.addEventListener("load", () => {

    $(document).ready(function(){
        $('.slider').bxSlider();
      });

    $(function() {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: 'true',
            slideWidth: 1200,
            pager: false
        }); 
    });  
});