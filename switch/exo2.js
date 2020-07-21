var readline = require("readline-sync"); // récupère le module readline-sync
var age = readline.questionInt("Quelle mois de l'annee voulez vous ?");

switch (age){
    case 16 : 
    case 17 : console.log('Vous êtes mineur');
    break;
    case 18 : 
    case 19 : 
    case 20 : console.log('Vous êtes majeur');
    break;
    case 21 : 
    case 22 : 
    case 23 : 
    case 24 : console.log('Vous êtes adulte');
    break;
    default : console.log('âge non pris en compte');
}