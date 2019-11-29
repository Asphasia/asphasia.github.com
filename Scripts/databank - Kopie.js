var score = 0;
var highscore = 0;


function Tipps() {
    confirm("Press a button!");
}

function Raten() {
    var Antwort = prompt("Geben sie ihre Schäztung ein!")
    if (Antwort == Tier123[0]) {
        document.getElementById("Bild").style.border = "10px green solid";
        score++;
        document.getElementById("Score").innerHTML = "Score: " + score;
        TiereX();
        document.getElementById("Bild").style.border = "10px gray solid";

    } else {
        document.getElementById("Bild").style.border = "10px red solid";
        if (score > highscore) {
            highscore = score;
            score = 0;
            document.getElementById("Score").innerHTML = "Score: " + score;
            document.getElementById("Highscore").innerHTML = "Highscore: " + highscore;
        }

        document.getElementById("Bild").style.border = "10px gray solid";
        TiereX();

    }
}

var Tiere = [
    "Affe",
    "Pferd",
    "Wildschwein",
    "Eisbär",
    "Giraffe",
    "Känguru",
    "Katze",
    /*"",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""*/
]

var Tier123 = {};

function TiereX() {
    var random = window.Tiere[Math.floor(Math.random() * window.Tiere.length)];
    var Tier = [random, "/Audio/" + random + ".mp3", "/Bilder/" + random + ".jpg"];
    Tier123 = Tier;
    document.getElementById("Name").innerHTML = Tier[0];
    document.getElementById("Audio").src = Tier[1];
    document.getElementById("Bild").src = Tier[2];
}