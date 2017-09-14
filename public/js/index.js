$(document).on('scroll', function(){
  if ($(document).scrollTop() > $('#posters').height() - $('#first').height()/8) {
    let count = ($(document).width()/2) / 200;
    for (i = 0; i < count - 1; i++) {
      addImage();
    }
  }
});

function addImage() {
  let number = Math.floor((Math.random() * 15) + 1);
  let delay = Math.floor((Math.random() * 1000) + 500);
  let img = $('<img class="child hide grow" src="../img/posters/poster' + number + '.jpg" />');
  img.delay(delay).animate({"opacity": "1"}, 1000);
  $('#posters').append(img);
};