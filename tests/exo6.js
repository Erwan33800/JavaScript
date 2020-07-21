var readline = require("readline-sync"); // récupère le module readline-sync

var moisEnLettres = readline.question("Quelle mois de l'annee voulez vous ? ");

if(moisEnLettres === "Janvier"){
    console.log("Le mois %s est 1",moisEnLettres);
}else if(moisEnLettres === "Février"){
    console.log("Le mois %s est 2",moisEnLettres);
}else if(moisEnLettres === "Mars"){
    console.log("Le mois %s est 3",moisEnLettres);
}else if(moisEnLettres === "Avril"){
    console.log("Le mois %s est 4",moisEnLettres);
}else if(moisEnLettres === "Mai"){
    console.log("Le mois %s est 5",moisEnLettres);
}else if(moisEnLettres === "Juin"){
    console.log("Le mois %s est 6",moisEnLettres);
}else if(moisEnLettres === "Juillet"){
    console.log("Le mois %s est 7",moisEnLettres);
}else if(moisEnLettres === "Aout"){
    console.log("Le mois %s est 8",moisEnLettres);
}else if(moisEnLettres === "Septembre"){
    console.log("Le mois %s est 9",moisEnLettres);
}else if(moisEnLettres === "Octobre"){
    console.log("Le mois %s est 10",moisEnLettres);
}else if(moisEnLettres === "Novembre"){
    console.log("Le mois %s est 11",moisEnLettres);
}else if(moisEnLettres === "Décembre"){
    console.log("Le mois %s est 12",moisEnLettres);
}