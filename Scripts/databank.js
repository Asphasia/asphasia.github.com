var Main = document.getElementById("Main");
var Bild = document.getElementById("Bild");
var Name = document.getElementById("Name");
var Score = document.getElementById("Score");
var Highscore = document.getElementById("Highscore");
var Audio = document.getElementById("Audio");
var TippsVar = document.getElementById("Tipps");
var lösung;
var selector = document.getElementById("selecter");

var score = 0;
var highscore = 0;

window.onload = function onload() {
    //document.getElementById("selecter").val = "option1"
    TiereX();
}

function Hide() {
    document.getElementById("Rückmeldung").style.display = "none";
}

function Tipps() {
    if (selector.options[selector.selectedIndex].value == "Übung") {
        //Wenn man Abfrage drückt
        Name.style.display = "none"
        Bild.onclick = Raten;
    } else {
        //Wenn man übung drückt
        Name.style.display = "block"
        Bild.onclick = TiereX;
    }
}
/*else {
    Bild.onclick = TiereX;
}

}*/

function Raten() {
    var Antwort = prompt("Geben sie ihre Schäztung ein!")
    if (Antwort == Tier123[0]) {
        //Bild.style.border = "10px green solid";
        score++;
        Score.innerHTML = "Score: " + score;
        Bild.onclick = "";
        document.getElementById("Right").style.display = "block";
        setTimeout(ReloadRight, 1000)

        function ReloadRight() {
            document.getElementById("Right").style.display = "none";
            Bild.onclick = Raten;
            TiereX();
            Bild.style.border = "5px rgba(244, 244, 244, .5) solid";
            Main.style.background = "rgba(255, 255, 255, .8)";
        }

    } else {
        //Bild.style.border = "10px red solid";
        document.getElementById("Rückmeldung").style.display = "block";
        document.getElementById("ErgebnisHeader").innerHTML = "<u>Dein Ergebnis ist falsch!</u>";
        document.getElementById("ErgebnisParagraph").innerHTML = "Schade, dein Ergebnis ist falsch. Das richtige Ergebnis wäre: " + Tier123[0];
        if (score > highscore) {
            highscore = score;
        }

        score = 0;
        Score.innerHTML = "Score: " + score;
        Highscore.innerHTML = "Highscore: " + highscore;

        Bild.onclick = "";
        setTimeout(ReloadWrong, 1000)

        function ReloadWrong() {
            Bild.onclick = Raten;
            TiereX();
            Bild.style.border = "5px rgba(244, 244, 244, .5) solid";
            Main.style.background = "rgba(255, 255, 255, .8)";
        }


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
    var Tier = [random, "../Audio/" + random + ".mp3", "../Bilder/" + random + ".jpg"];
    Tier123 = Tier;
    Name.innerHTML = Tier[0];
    Audio.src = Tier[1];
    Bild.src = Tier[2];
}