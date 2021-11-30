const currentHour = 16;
var message = "";

message = (currentHour >= 22 ? "Não devemos comer nada é hora de dormir" 
            : currentHour >= 18 && currentHour < 22 ? "Rango da noite, vamos jantar :D" 
            : currentHour >= 14 && currentHour < 18 ? "Vamos fazer um bolo pro café da tarde?"
            : currentHour >= 11 && currentHour < 14 ? "Hora do almoço!!!"
            : currentHour >= 4 && currentHour < 11 ? "Hmmm, cheiro de café recém passado"
            : "Voce devia estar dormindo!");

console.log(message)
    