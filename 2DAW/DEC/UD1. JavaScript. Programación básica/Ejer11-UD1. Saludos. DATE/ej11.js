var hora = new Date().getHours();
if(hora<12){
    console.log("Buenos dias, son las " + hora);
}
else if(hora<20){
    console.log("Buenas tardes, son las " + hora);
}
else{
    console.log("Buenas noches, son las " + hora);
}
