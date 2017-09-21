//OnClick funtion opens a new tab to donalds twitter
$(document).ready(function () {
  $('#imgTweet').click(function (e) {
    e.preventDefault();
    var url = 'https://twitter.com/realdonaldtrump'; 
    window.open(url, '_blank');
  });
});

//Carousel wheel with diffrent facts. Autoplay enabmled
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
  });
});

//OnClick funtion opens a new tab when clicking on the paragraphs
$(document).ready(function () {
  $('#paragraph1').click(function (e) {
    e.preventDefault();
    var url = 'http://www.goodhousekeeping.com/health/diet-nutrition/a30303/facts-about-coffee/'; 
    window.open(url, '_blank');
  });
});

$(document).ready(function () {
  $('#paragraph2').click(function (e) {
    e.preventDefault();
    var url = 'http://www.goodhousekeeping.com/health/diet-nutrition/a30303/facts-about-coffee/'; 
    window.open(url, '_blank');
  });
});


