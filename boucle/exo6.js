var slashs = "";
for (var i=1; i <= 20; i++){
    slashs += "/";
}
var antiSlashs = "";
for (var i=1; i <= 20; i++){
    antiSlashs += "\\";
}
for (var j=1; j <= 5; j++) {
    if( j % 2 === 0){
        
    console.log(slashs);
    }else{
        console.log(antiSlashs);
    }
}
