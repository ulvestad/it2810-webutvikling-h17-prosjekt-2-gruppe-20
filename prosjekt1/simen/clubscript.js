// premier league dictonary for 2017/2018
var pl_teams = [ { "key": "chelsea", "name": "Chelsea", "code": "CHE", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t8.svg" }, { "key": "arsenal", "name": "Arsenal", "code": "ARS", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t3.svg" }, { "key": "tottenham", "name": "Tottenham Hotspur", "code": "TOT", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t6.svg" }, { "key": "westham", "name": "West Ham United", "code": "WHU", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t21.svg" }, { "key": "crystalpalace", "name": "Crystal Palace", "code": "CRY", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t31.svg" }, { "key": "manutd", "name": "Manchester United", "code": "MUN", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t1.svg" }, { "key": "mancity", "name": "Manchester City", "code": "MCI", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t43.svg" }, { "key": "everton", "name": "Everton", "code": "EVE", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t11.svg" }, { "key": "liverpool", "name": "Liverpool", "code": "LIV", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t14.svg" }, { "key": "westbrom", "name": "West Bromwich Albion", "code": "WBA", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t35.svg" }, { "key": "newcastle", "name": "Newcastle United", "code": "NEW", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t4.svg" }, { "key": "stoke", "name": "Stoke City", "code": "STK", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t110.svg" }, { "key": "southampton", "name": "Southampton", "code": "SOU", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t20.svg" }, { "key": "leicester", "name": "Leicester City", "code": "LEI", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t13.svg" }, { "key": "bournemouth", "name": "Bournemouth", "code": "BOU", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t91.svg" }, { "key": "watford", "name": "Watford", "code": "WAT", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t57.svg" }, { "key": "brightonhovealbion", "name": "Brighton & Hove Albion", "code": "BHA", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t36.svg" }, { "key": "burnley", "name": "Burnley", "code": "BUR", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t90.svg" }, { "key": "huddersfieldtown", "name": "Huddersfield Town", "code": "HFT", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t38.svg" }, { "key": "swansea", "name": "Swansea", "code": "SWA", "img": "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t80.svg" } ];

window.addEventListener("load", init);

function init(){    
    for (i = 0; i < pl_teams.length; i++) { 
        var club_name = pl_teams[i].name;
        var code = pl_teams[i].code;
        var img_src = pl_teams[i].img;
        var selecter = document.getElementById("selecter");
        var option = document.createElement("option");
        
        if (i<5){
            addCards(img_src, pl_teams[i].code)
            option.text = club_name+ "★";
            selecter.add(option);
        }else{
            option.text = club_name;
            selecter.add(option);
        }
    }

}

function addCards(img_src, code){
    var div = document.createElement("div");
    var img_div = document.createElement("img_div");
    var txt_div = document.createElement("txt_div");
    txt_div.id = "txt_div"
    img_div.id = "img_div"
    
    var img = new Image(120,120);
    img.src= img_src;
    img_div.appendChild(img);

    div.id = "club"
    div.appendChild(img_div);
    div.appendChild(txt_div);
    document.getElementById("clubsContainer").appendChild(div);
}

function addTeam(){
    var e = document.getElementById("selecter");
    var text = e.options[e.selectedIndex].text;
    if (text.indexOf('★') > -1)
    {
      alert("Kan ikke legge til lag som allerede er lagt til som favoritt.\nVennligst prøv igjen!");
    }else{
        for (i = 0; i < pl_teams.length; i++) { 
            var club_name = pl_teams[i].name;
            if (club_name.indexOf(text) > -1){
                 e.options[e.selectedIndex].text = text + "★"
                 addCards(pl_teams[i].img, pl_teams[i].code)
            }
        }
    }
}


function removeTeam(){
    var e = document.getElementById("selecter");
    var text = e.options[e.selectedIndex].text;
    var img_src = null;

    for (i = 0; i < pl_teams.length; i++) { 
        var club_name = pl_teams[i].name;
        if (club_name === text.replace("★", "")){
             img_src = pl_teams[i].img
        }
    }
    if (text.indexOf('★') < -1)
    {
      alert("Kan ikke fjerne lag som ikke er lagt til som favoritt.\nVennligst prøv igjen!");
    }else{
        var elements = document.getElementById("clubsContainer").childNodes;
        for (var i=0; i<elements.length; i++) {
            var src = elements[i].childNodes[0].childNodes[0].src
            if (img_src === src){
                elements[i].parentNode.removeChild(elements[i])
                e.options[e.selectedIndex].text = text.replace("★", "")

            }
        }
    }
}