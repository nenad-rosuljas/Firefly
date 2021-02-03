$(document).ready(function(){
  $("[data-link-trigger]").click(function(event) {
    // Toggle active class on links
   // Button active state
   $(this).addClass("active");
   $(this).siblings().removeClass("active");
  });
  
});
