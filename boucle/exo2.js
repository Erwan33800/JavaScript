var readline = require("readline-sync");

var tableMultiplications = readline.questionInt("Quelle est la table de multiplications ? ");

for (var i=10; i > 0 ; i--){
    var resultat = i * tableMultiplications;
    console.log(i + " * " + tableMultiplications + " = " + resultat);
}