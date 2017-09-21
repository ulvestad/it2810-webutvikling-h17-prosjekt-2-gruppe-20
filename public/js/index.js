let counter = 0;
let numberOfPosters = 15;

$(document).ready(function() {
  addSingleImage();
  addSingleImage();
  addSingleImage();
});

$(document).on('scroll', function(){
  if ($(document).scrollTop() > $('#posters').height() && $(document).scrollTop() > 100) {
    addSingleImage();
    addSingleImage();
    addSingleImage();
  }
});

function addSingleImage() {
  let id = (counter%numberOfPosters) + 1
  let img = $('<img class="child hide grow" src="../img/posters/poster' + id + '.jpg" />');
  img.delay(1000).animate({"opacity": "1"}, 2000);
  $('#posters').append(img);
  counter++;
};
