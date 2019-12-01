var Main = document.getElementById("Main");
var Bild = document.getElementById("Bild");
var Name = document.getElementById("Name");
var Score = document.getElementById("Score");
var Highscore = document.getElementById("Highscore");
var Audio = document.getElementById("Audio");
var TippsVar = document.getElementById("Tipps");
var selector = document.getElementById("selecter");
var selectorVar = document.getElementById("VarSelect")
var img123 = 0;
var score = 0;
var highscore = 0;
var zahl = 0;
var Kategorie = "Essen"

window.onload = function onload() {
    //document.getElementById("selecter").val = "option1"
    ZeigeRandomBild();

}

function Hide() {
    document.getElementById("Rückmeldung").style.display = "none";
}

function Tipps() {
    if (selector.options[selector.selectedIndex].value == "Übung") {
        //Wenn man übung drückt
        function ÜbungZeigen() {
            for (var i = 0; i < Items.length; i++) {
                document.getElementById("Davor").style.display = "none"
                Main.style.display = ("none")
                document.getElementById("Übung").style.display = "inline-block"
                document.body.style.background = "white"
                var figure1 = document.createElement("figure")
                figure1.setAttribute("Id", "einzel" + zahl)
                figure1.setAttribute("Class", "einzel")
                document.getElementById("Übung").appendChild(figure1)
                var figcaption1 = document.createElement("figcaption")
                document.getElementById("einzel" + zahl).appendChild(figcaption1)
                document.getElementById("einzel" + zahl).textContent = Items[i];
                var img1 = document.createElement("img")
                img1.setAttribute("src", "../Bilder/" + Kategorie + "/" + Items[i] + ".jpg")
                document.getElementById("einzel" + zahl).appendChild(img1)
                zahl++;

            }

            var a1 = document.createElement("a")
            a1.setAttribute("Id", "Zurück")
            document.getElementById("Übung").appendChild(a1)
            a1.setAttribute("href", "index.html")
            a1.style.display = "block"
            a1.innerHTML = "Zurück"

        }

        ÜbungZeigen()
    } else {
        //Wenn man Abfrage drückt
        Name.style.display = "none"
        Bild.onclick = AbfrageBild;
    }
}

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


var Items_Essen = [
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

var Items_Trinken = [
    "Sprudelwasser",
    "Stilles Wasser",
    "Kaffee",
    "Tee",
    "Cola",
    "Limonade",
    "Apfelsaft",
    "Orangensaft",
    "Cappuccino",
    "Milch",
    "Saft",
    "Sirup",
    "Kakao",
    "Sekt",
    "Rotwein",
    "Weißwein",
    "Bier",
    "Schnaps"
]

var Items_Bad = [
    "Handtuch",
    "Waschlappen",
    "Gesichtscreme",
    "Shampoo",
    "Parfüm",
    "Deo",
    "Kamm",
    "Bürste",
    "Nagelknipser",
    "Schminke",
    "Rasierer",
    "Pinzette",
    "Brille",
    "Zahnbürste",
    "Zahnseide",
    "Zahnpasta",
    "Ohrenstäbchen",
    "Duschgel"
]

var Items_Ich_fühle_mich = [
    "gut",
    "schlecht",
    "traurig",
    "müde und schlapp"
]

var Items_Ich_habe = [
    "Kopfschmerzen",
    "Bauchschmerzen",
    "Zahnschmerzen",
    "Rückenschmerzen",
    "Ohrenschmerzen",
    "Brustschmerzen",
    "Halsschmerzen",
    "Augenschmerzen",
    "Unterleibsschmerzen"
]

var Items_Ich_möchte = [
    "Duschen",
    "zum Klo",
    "etwas anderes anziehen",
    "schlafen",
    "Fernseh schauen",
    "Radio hören",
    "aufstehen",
    "JA",
    "NEIN"
]

var RandomItem = {};

var Items = Items_Essen;

function ChangeVar() {

    if (selectorVar.options[selectorVar.selectedIndex].value == "Essen") {
        document.getElementById("Davor").style.display = "none"
        Kategorie = "Essen"
        Items = Items_Essen;
        ZeigeRandomBild()
    } else if (selectorVar.options[selectorVar.selectedIndex].value == "Trinken") {
        document.getElementById("Davor").style.display = "none"
        Kategorie = "Trinken"
        Items = Items_Trinken;
        ZeigeRandomBild()
    } else if (selectorVar.options[selectorVar.selectedIndex].value == "Bad") {
        document.getElementById("Davor").style.display = "none"
        Kategorie = "Bad"
        Items = Items_Bad;
        ZeigeRandomBild()
    } else if (selectorVar.options[selectorVar.selectedIndex].value == "Ich fühle mich") {
        Kategorie = "Ich fühle mich"
        document.getElementById("Davor").innerHTML = Kategorie + "..."
        document.getElementById("Davor").style.display = "block"
        Items = Items_Ich_fühle_mich;
        ZeigeRandomBild()
    } else if (selectorVar.options[selectorVar.selectedIndex].value == "Ich habe") {
        Kategorie = "Ich habe"
        document.getElementById("Davor").innerHTML = Kategorie + "..."
        document.getElementById("Davor").style.display = "block"
        Items = Items_Ich_habe;
        ZeigeRandomBild()
    } else if (selectorVar.options[selectorVar.selectedIndex].value == "Ich möchte") {
        Kategorie = "Ich möchte"
        document.getElementById("Davor").innerHTML = Kategorie + "..."
        document.getElementById("Davor").style.display = "block"
        Items = Items_Ich_möchte;
        ZeigeRandomBild()
    }
}


function ZeigeRandomBild() {
    var random = window.Items[Math.floor(Math.random() * window.Items.length)];
    var RandomItem_ = [random, "../Audio/" + Kategorie + "/" + random + ".mp3", "../Bilder/" + Kategorie + "/" + random + ".jpg"];
    RandomItem = RandomItem_;
    Name.innerHTML = RandomItem[0];
    Audio.src = RandomItem[1];
    Bild.src = RandomItem[2];
}