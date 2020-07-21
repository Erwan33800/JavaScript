var age = 18;
var taille = 180;
var pays = "france";

if(age > 16 && taille > 160 && (pays === "France" || pays === "france")){
    console.log("apte");
}else{
    console.log("inapte");
}