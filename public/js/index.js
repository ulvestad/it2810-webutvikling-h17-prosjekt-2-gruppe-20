// variables to loop over all poster images
let counter = 0;
let numberOfPosters = 15;

// Loads 3 images when page is ready
$(document).ready(function() {
  multiple(3);
});

// When scrolling to the bottom of the page -> add more images
$(document).on('scroll', function(){
  if ($(document).scrollTop() > $('#posters').height() && $(document).scrollTop() > 100) {
    multiple(3);
  }
});

// Adds multiple images
function multiple(m) {
  for (var i = 0; i < m; i++) {
    addSingleImage();
  }
}

// Adds a single image element to the posters container
function addSingleImage() {
  let id = (counter%numberOfPosters) + 1;
  let img = $('<img class="child hide grow" src="../img/posters/poster' + id + '.jpg" />');
  img.delay(1000).animate({'opacity': '1'}, 2000);
  $('#posters').append(img);
  counter++;
}