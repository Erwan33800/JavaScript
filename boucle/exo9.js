var readline = require("readline-sync");

var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
var resultatFactorielle = 1;
var i = 1;
while(resultatFactorielle < nombre ){
    resultatFactorielle *= i;
    i++;
    console.log(i+"eme passage - résultat : " + resultatFactorielle);
}