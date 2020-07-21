var age = 18;
var sexe = false;
var ville = "Paris";



if(age >= 70 && ville === "Toulouse"){
    if (sexe){
    console.log("Personne agée de Toulouse de sexe masculin");
    }else{
        console.log("Personne agée de Toulouse de sexe féminim");
    }  
}else if(age < 70 && (ville === "Paris" || ville === "Marseille")){
    if (sexe){
        console.log("Personne adulte de Paris ou Marseille de sexe masculin");
    }else{
        console.log("Personne adulte de Paris ou Marseille de sexe féminim");
    }  
}