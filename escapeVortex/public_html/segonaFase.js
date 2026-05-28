"use_strict";
// Variables i constants

const PREGUNTES1=["a","b","c","d","e","f","g","h","i","j"];
const RESPUESTAS=["a","b","c","d","e","f","g","h","i","j"];
        const PREGUNTES = 11;
        
let intentos = 3;
let comodines = 3;
let i = 0;

do {
    let usuario = prompt(PREGUNTES1[i]);
    if (usuario == RESPUESTAS[i]) {
        alert("Respuesta correcta!!!");
        i++;
} else {
        alert("Respuesta incorrecta");
        let usarComodines = prompt("¿Quieres acceder a un portal de emergencia para escapar del enigma?");
        if (usarComodines=="si" && comodines > 0) {
            comodines--;
            alert("Has accedido a un portal de emergencia. Te quedan: " + comodines);
            i++;
        } else {

            intentos--;
            alert("Has perdido un intento, NO TE RINDAS!!!. Te quedan: " + intentos);

        }
    }

} while (i < PREGUNTES1.length && intentos > 0);

if (intentos == 0) {
alert("DEERROTA");
} else if (PREGUNTES == 11) {
alert("VICTORIA");
}