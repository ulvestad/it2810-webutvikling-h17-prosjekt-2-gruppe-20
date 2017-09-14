let posters = 15;
let done = 1;

window.onload = function() {
  setInterval(function() {
    changeImage();
  }, 3000);
}

window.onscroll = function() {
  fakeLazyLoad();
}

function fakeLazyLoad() {
  for (x = done; x < posters + 1; x++) {
    imageTransition('poster' + x);
  }
}

// Adds the css class 'show' when the height is approriate
function imageTransition(id) {
  let height = window.innerHeight;
  let img1 = document.getElementById(id);
  let img1value = img1.getBoundingClientRect().top + img1.height/2;

  if (img1value < height) {
    img1.classList.add('show');
    img1.classList.remove('hide');
    done++;
  }
}

// Changes coffee image with random
function changeImage() {
  let rand = Math.floor((Math.random() * 7) + 1);
  document.getElementById('coffee').src='img/coffee/coffee' + rand + '.jpg';
}