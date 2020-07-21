var readline = require("readline-sync");

var tableMultiplications = readline.questionInt("Quelle est la table de multiplications ? ");

for (var i=1; i < 11 ; i++){
    var resultat = i * tableMultiplications;
    console.log(i + " * " + tableMultiplications + " = " + resultat);
}