var Main = document.getElementById("Main");
var Bild = document.getElementById("Bild");
var Name = document.getElementById("Name");
var Score = document.getElementById("Score");
var Highscore = document.getElementById("Highscore");
var Audio = document.getElementById("Audio");
var TippsVar = document.getElementById("Tipps");
var lösung;
var selector = document.getElementById("selecter");
var img123 = 0;
var score = 0;
var highscore = 0;
var zahl = 0;

window.onload = function onload() {
    //document.getElementById("selecter").val = "option1"
    ZeigeRandomBild();
    Bild.onclick = ÜbungZeigen;

}

function Hide() {
    document.getElementById("Rückmeldung").style.display = "none";
}

function Tipps() {
    if (selector.options[selector.selectedIndex].value == "Übung") {
        //Wenn man Abfrage drückt
        Name.style.display = "none"
        Bild.onclick = AbfrageBild;
    } else {
        //Wenn man übung drückt
        Name.style.display = "block"
        Bild.onclick = ZeigeRandomBild;
    }
}

function ÜbungZeigen() {
    for (var i = 0; i < 70; i++) {

        Main.style.display = ("none")
        var figure1 = document.createElement("figure")
        figure1.setAttribute("Id", "einzel" + zahl)
        figure1.setAttribute("Class", "einzel")
        document.getElementById("gesamt").appendChild(figure1)
        var figcaption1 = document.createElement("figcaption")
        document.getElementById("einzel" + zahl).appendChild(figcaption1)
        document.getElementById("einzel" + zahl).textContent = Items[i];
        var img1 = document.createElement("img")
        img1.setAttribute("src", "../Bilder/Essen/" + Items[i] + ".jpg")
        document.getElementById("einzel" + zahl).appendChild(img1)
        zahl++;

    }
}


/*else {
    Bild.onclick = ZeigeRandomBild;
}

}*/

function AbfrageBild() {
    var Antwort = prompt("Geben sie ihre Schäztung ein!")
    if (Antwort == RandomItem[0]) {
        //Bild.style.border = "10px green solid";
        score++;
        Score.innerHTML = "Score: " + score;
        Bild.onclick = "";
        document.getElementById("Right").style.display = "block";
        setTimeout(ReloadAntwortRichtig, 1000)

        function ReloadAntwortRichtig() {
            document.getElementById("Right").style.display = "none";
            Bild.onclick = AbfrageBild;
            ZeigeRandomBild();
            Bild.style.border = "5px rgba(244, 244, 244, .5) solid";
            Main.style.background = "rgba(255, 255, 255, .8)";
        }

    } else {
        //Bild.style.border = "10px red solid";
        document.getElementById("Rückmeldung").style.display = "block";
        document.getElementById("ErgebnisHeader").innerHTML = "<u>Dein Ergebnis ist falsch!</u>";
        document.getElementById("ErgebnisParagraph").innerHTML = "Schade, dein Ergebnis ist falsch. Das richtige Ergebnis wäre:" + " " + RandomItem[0];
        if (score > highscore) {
            highscore = score;
        }

        score = 0;
        Score.innerHTML = "Score: " + score;
        Highscore.innerHTML = "Highscore: " + highscore;

        Bild.onclick = "";
        setTimeout(ReloadAntwortFalsch, 1000)

        function ReloadAntwortFalsch() {
            Bild.onclick = AbfrageBild;
            ZeigeRandomBild();
            Bild.style.border = "5px rgba(244, 244, 244, .5) solid";
            Main.style.background = "rgba(255, 255, 255, .8)";
        }


    }
}

var Items = [
    "Geflügel",
    "Schweinefleisch",
    "Lammfleisch",
    "Rindfleisch",
    "Fisch",
    "Fritten",
    "Kroketten",
    "Ofenkartoffel",
    "Reis",
    "Kartoffel",
    "Gratin",
    "Nudeln",
    "Brot",
    "Bratkartoffeln",
    "Püree",
    "Baguette",
    "Brötchen",
    "Spiegelei",
    "Omelett",
    "Rührei",
    "Kuchen",
    "Eis",
    "Schokolade",
    "Pudding",
    "Mousse au Chocolat",
    "Pfannenkuchen",
    "Waffeln",
    "Wurst",
    "gekochter Schinken",
    "roher Schinken",
    "Salami",
    "Käse",
    "Marmelade",
    "Sirup",
    "Schokoladencreme",
    "Quark",
    "Streichkäse",
    "Ei",
    "Möhren",
    "Blumenkohl",
    "Zucchini",
    "Gurke",
    "Salat",
    "Paprika",
    "Tomaten",
    "Mais",
    "Lauch",
    "Aubergine",
    "Kohl",
    "Spinat",
    "Erbsen",
    "Bohnen",
    "Pilz",
    "Zwiebel",
    "Rosenkohl",
    "Apfel",
    "Orange",
    "Mandarine",
    "Trauben",
    "Birne",
    "Banane",
    "Kirsche",
    "Erdbeere",
    "Himbeere",
    "Blaubeere",
    "Ananas",
    "Pflaume",
    "Pfirsich",
    "Kiwi",
    "Mango"
]

var RandomItem = {};

function ZeigeRandomBild() {
    var random = window.Items[Math.floor(Math.random() * window.Items.length)];
    var RandomItem_ = [random, "../Audio/Essen/" + random + ".mp3", "../Bilder/Essen/" + random + ".jpg"];
    RandomItem = RandomItem_;
    Name.innerHTML = RandomItem[0];
    Audio.src = RandomItem[1];
    Bild.src = RandomItem[2];
}