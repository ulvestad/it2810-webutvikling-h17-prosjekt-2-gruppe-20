const coffee_per_cup = 7.5
const water_per_cup = 12.5

function calculate_coffee(n_cups) {
  let coffee = coffee_per_cup * n_cups;
  let water = water_per_cup * n_cups;
  return { coffee: coffee, water: water };
};

$('#nCups').on('input', function() {
  let cups = $('#nCups').val();
  let res = calculate_coffee(cups);
  $("#result").html("<div>You need:<br/>" +
    res.coffee + " grams of coffee<br/>" +
    res.water + " ml of water")
});
