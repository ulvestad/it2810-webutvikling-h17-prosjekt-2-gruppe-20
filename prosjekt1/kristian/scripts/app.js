/* coffe in gram */
const coffe_per_cup = 7.5

/* water in ml.*/
const water_per_cup = 12.5


function calculate_coffe(n_cups) {
    /* Calculates the amount of coffe powder and water needed for n_cups cups of coffe */

    let coffe = coffe_per_cup * n_cups;
    let water = water_per_cup * n_cups;

    return { coffe: coffe, water: water }
}

function on_calculate_coffe() {
    /* Event handler for the calculate-button */

    let coffe_result = document.getElementById("coffeResult");
    let n_cups = document.getElementById("nCups").value;
    let res = calculate_coffe(n_cups);

    if (n_cups < 1) {
        output_text = "You should always make at least 1 cup of coffe.";
    } else {
        output_text = "<h2>To make " + n_cups;
        (n_cups > 1) ? output_text += " cups ": output_text += " cup ";

        output_text += "of coffe, you need:</h2><br /> <ul>";
        output_text += "<li>" + res.coffe + " grams of coffe </li>";
        output_text += "<li>" + res.water + " ml of water </li>";
        output_text += "</ul><br />";
        output_text += "Good luck!";
    }

    document.getElementById("coffe_result").innerHTML = output_text;
}

on_calculate_coffe();