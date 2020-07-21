var readline = require("readline-sync"); // récupère le module readline-sync
var moisEnLettres = readline.question("Quelle mois de l'annee voulez vous ?");

switch(moisEnLettres) {
    case "Janvier" : console.log("1");
    break;
    case "Février" : console.log("2");
    break;
    case "Mars" : console.log("3");
    break;
    case "Avril" : console.log("4");
    break;
    case "Mai" : console.log("5");
    break;
    case "Juin" : console.log("6");
    break;
    case "Juillet" : console.log("7");
    break;
    case "Aout" : console.log("8");
    break;
    case "Septembre" : console.log("9");
    break;
    case "Octobre" : console.log("10");
    break;
    case "Novembre" : console.log("11");
    break;
    case "Décembre" : console.log("12");
    break;
    default : console.log("mois inexistant")
}