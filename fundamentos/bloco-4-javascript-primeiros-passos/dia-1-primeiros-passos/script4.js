const currentHour = 12;
let message = "";
if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
}
else if(18 <= currentHour && currentHour < 22){
    message="Rango da noite, vamos jantar :D";
}
else if(14 <= currentHour && currentHour < 18){
    message="Vamos fazer um bolo pro café da tarde?";
}
else if(11 < currentHour && currentHour < 14){
    message="Hora do almoço!!!";
}
else{
    message="Hmmm, cheiro de café recém passado.";
}
console.log(message);