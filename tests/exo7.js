var readline = require("readline-sync"); // récupère le module readline-sync

var classe = readline.question("Veuillez saisir la classe (entre A et E) : ");

if(classe === "A" || classe === "B"){
    console.log("Numéro 1");
}else if(classe === "C" || classe === "D"){
    console.log("Numéro 2");
}else if(classe === "E" || classe === "F"){
    console.log("Numéro 3");
}else{
    console.log("Classe inconnue");
}