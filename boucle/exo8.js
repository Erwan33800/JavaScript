var readline = require("readline-sync");

var chiffre = "";

while(chiffre < 1 || chiffre > 5){
    chiffre = readline.questionInt("Veuillez saisir un chiffre entre 1 et 5 : ");
}
console.log("Vous avez saisi : " + chiffre);

// do{
//     chiffre = readline.questionInt("Veuillez saisir un chiffre entre 1 et 5 : ");
// }while(chiffre < 1 || chiffre > 5)
// console.log("Vous avez saisi : " + chiffre);