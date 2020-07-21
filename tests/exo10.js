var readline = require("readline-sync"); // récupère le module readline-sync

var age = 25;
console.log((age < 18) ? "mineur" : "majeur")

var sport = true;
console.log("Sport : " + ((sport) ? "bien" : "devrait en faire"));

var sexe = true;
console.log("sexe : " + ((sexe) ? "femme" : "homme"));

var nombre1 = readline.questionInt("Veuillez saisir un nombre : ");
var parite = (nombre1 % 2 === 0) ? "pair" : "impair";
console.log("Parité : " + parite);

var nombre2 = readline.questionInt("Veuillez saisir un nombre : ");
var quatre = (nombre2 % 4 === 0) ? "divisible par 4" : "non divisible par 4";
console.log("Le nombre est " + quatre);