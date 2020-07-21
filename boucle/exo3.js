var resultat = 0;

// for (var i=0; i <= 200; i = i + 2) {
//     resultat += i;
// }

for (var i=0; i <= 200; i = i + 2) {
    if(i % 2 === 0){  // avec le modulo 2
        resultat += i;
    }
}

console.log("La somme des 100 premiers nombres pair est égale à : " + resultat);

