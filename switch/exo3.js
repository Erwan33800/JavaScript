var readline = require("readline-sync"); // récupère le module readline-sync
var menu = "1/ Ajouter un joueur\n";
menu += "2/ Modifier un joueur\n";
menu += "3/ Supprimer un joueur";

console.log(menu);

var actEnChiffre = readline.questionInt("Quelle activite ? ");

switch (actEnChiffre) {
    case 1 : console.log("Vous avez choisi l'act 1");
    break;
    case 2 : console.log("Vous avez choisi l'act 2");
    break;
    case 3 : console.log("Vous avez choisi l'act 3");
    break;
    default : console.log("Activité non répertoriée");
}

