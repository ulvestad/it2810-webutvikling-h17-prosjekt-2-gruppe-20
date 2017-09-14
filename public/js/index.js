$(document).on('load', function() {
  addMultipleImages();
});

$(document).on('scroll', function(){
  if ($(document).scrollTop() > $('#posters').height() - $('#first').height()/8) {
    addMultipleImages();
  }
});

function addMultipleImages() {
  let count = ($(document).width()/2) / 200;
  for (i = 0; i < count - 1; i++) {
    addSingleImage();
  }
}

function addSingleImage() {
  let number = Math.floor((Math.random() * 15) + 1);
  let delay = Math.floor((Math.random() * 1000) + 500);
  let img = $('<img class="child hide grow" src="../img/posters/poster' + number + '.jpg" />');
  img.delay(delay).animate({"opacity": "1"}, 1000);
  $('#posters').append(img);
};