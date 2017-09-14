const jumpTo = (id) => document.getElementById(id).scrollIntoView();

//Punkt 3. Bruker JS til å gjøre elementer interkative
document.getElementById('football').onclick = function() {jumpTo('footballPic')};

document.getElementById('tennis').onclick = function() {jumpTo('tennisPic')};

document.getElementById('bandy').onclick = function() {jumpTo('bandyPic')};
