"use_strict";
// Variables i constants
const PREGUNTES1 = ["Qué número falta? 2, 4, 16, __. Opcions: \na) 8\nb) 10\nc) 12",
    "Si 5 + 7 × 2 = ¿? Opcions: \na) 24 \nb) 19 \nc) 14",
    "Enigma: Tengo llaves però no puedo abrir puertas. ¿Qué soy? Opcions: \na) Un piano \nb) Un coche \nc) Una casa",
    "¿Cuánto es 9 × 9? Opcions: \na) 72 \nb) 99 \nc) 81",
    "Enigma: Cuanto más me quites, más grande me hago. ¿Qué soy? Opcions: \na) Un libro \nb) Un árbol \nc) Un agujero",
    "Tiene ojos pero no puede ver nada, tiene piel pero no siente el frío ¿Qué es? Opcions: \na) Una estatua de mármol \nb) Una patata \nc) Un abrigo de cuero",
    "Vas corriendo en una carrera de velocidad y adelantas a la persona que va en el segundo lugar. ¿En qué posición estás ahora? Opcions: \na) Primero \nb) Segundo \nc) Tercero",
    "Tengo una cola brillante pero no soy un animal. Viajo por el espacio profundo y me deshago lentamente cuando me acerco al Sol. ¿Qué soy? \na) Un asteroide \nb) Un cometa \nc) Un cohete",
    "Soy un lugar del espacio donde la gravedad es tan invisible como destructiva. Absorbo todo lo que se me acerca demasiado, y ni siquiera la luz puede escapar de mis manos. ¿Qué soy? \na) La cara oculta de la luna \nb) Una estrella de neutrones \n) Un agujero negro",
    "No tengo luz propia, pero brillo en la noche. Cambio de forma cada semana, pero siempre soy la misma. ¿Qué soy? \na) Una estrella lejana. \nb) El planeta Marte. \nc) La Luna"];
const PREGUNTES = 11;
const RESPOSTES = ["a", "b", "a", "c", "c", "b", "b", "a", "c", "a"];
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
        if (usarComodines == "si" && comodines > 0) {
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
    alert("Misión fallida 😞, unos aliens te han lanzado un rayo hipersónico y te han desintegrado al instante. 🛸👽");
} else if (PREGUNTES == 11) {
    alert("¡¡¡🎉Bien hecho🎉!!! Has completado la mision con éxito, toma tu premio 🤲🍔");
}