
// OncClick funtion opens a new tab to donalds twitter
$(document).ready(function () {
  $('#imgTweet').click(function (e) {
    e.preventDefault();
    var url = "https://twitter.com/realdonaldtrump"; 
    window.open(url, '_blank');
  });
});


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  });
});
