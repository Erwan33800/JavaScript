var prenom = "GASTON";
var nom = "Matthieu";


console.log("********* Avant correction***************");
console.log("prénom : "+ prenom);
console.log("nom : "+ nom);
var tmp = prenom; // tmp = GASTON
prenom = nom;
nom = tmp;
console.log("********* après correction***************")
console.log("prénom : "+ prenom);
console.log("nom : "+ nom);