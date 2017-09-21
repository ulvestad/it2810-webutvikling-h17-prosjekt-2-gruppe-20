const coffee_per_cup = 7.5;
const water_per_cup = 12.5;

// Returns how much coffe and water you need based on input
function calculate_coffee(n_cups) {

  if (n_cups >= 100) {
    return { coffe: "", water: "", error: 'To make 100+ cups of coffe, you should probably ask someone else for tips.</br> Please contact <a href="https://contactus.jdecoffee.com/friele-norway/">Friele</a>' }
  }

  let coffee = coffee_per_cup * n_cups;
  let water = water_per_cup * n_cups;
  return { coffee: coffee, water: water, message: "" };
};

// Updates html with new values when input changes
$('#nCups').on('input', function() {
  let cups = $('#nCups').val();
  let res = calculate_coffee(cups);

  if (res.error) {
    $('#result').html(res.error);
  } else {
    $('#result').html('You need:<br/>' +
      res.coffee + ' grams of coffee<br/>' +
      res.water + ' ml of water');
  }


});