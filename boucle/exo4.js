var readline = require("readline-sync");

var factorielle = readline.questionInt("Choisir la factorielle a calculer ? ");
var resultat = 1;

for (var i=1; i <= factorielle ; i++){
    resultat *= i;
    var message = "";
    message += i;
    if(i===1){
        message += "er";
    }else{
        message += "eme";
    }
    message +=  " passage - total : " + resultat;
    console.log(message);
    // console.log(i+"eme passage - total : " + resultat);
}