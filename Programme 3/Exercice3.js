var prenom = "Tya"
var age = 30;
var sexe = true;
var poids = 60;
var yeux = true;

if (sexe === true){
    sexe = "fille";
}else{
    sexe = "garçon";
}
if (yeux === true){
    yeux = "bleus";
}else{
    yeux = "marrons";
}

console.log(prenom + " a " + age + " ans, c'est une " + sexe + ", elle pèse " + poids + " kilos et a les yeux " + yeux);

prenom = "Milo";
age = 31;
sexe = false;
poids = 70;
yeux = false;

console.log(prenom + " a " + age + " ans, c'est un " + sexe + ", il pèse " + poids + " kilos et a les yeux " + yeux);