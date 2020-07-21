var readline = require("readline-sync"); // récupère le module readline-sync
var moisEnChiffre = readline.questionInt("Quelle mois de l'annee voulez vous ? 1 à 12 ");

switch(moisEnChiffre) {
    case 1 : console.log("Janvier");
    break;
    case 2 : console.log("février");
    break;
    case 3 : console.log("mars");
    break;
    case 4 : console.log("avril");
    break;
    case 5 : console.log("mai");
    break;
    case 6 : console.log("juin");
    break;
    case 7 : console.log("juillet");
    break;
    case 8 : console.log("aout");
    break;
    case 9 : console.log("septembre");
    break;
    case 10 : console.log("octobre");
    break;
    case 11 : console.log("novembre");
    break;
    case 12 : console.log("décembre");
    break;
    default : console.log("mois inexistant")
}