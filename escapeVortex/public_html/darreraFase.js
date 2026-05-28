"use_strict";
//Primera fase (introducció)
        const NOMUSUARI = prompt("Introduce un nombre de usuario (15 carácteres como máximo):");
        alert("🌌 Bienvenido/a comandante ✨" + NOMUSUARI.substring(0, 14) + "✨ a Escape Vortex!!! 🌌");
        alert("🚨 MISIÓN ESPACIAL INICIADA 🚨\nBienvenido/a comandante " + NOMUSUARI + ".\nDurante la misión encontrarás:\n🧩 Enigmas espaciales\n🔢 Operaciones matemáticas\n🚪 Portales de seguridad bloqueados\n⚠️ Sistemas de defensa que pondrán a prueba tu inteligencia\n📜 Instrucciones de la misión\nIntroduce la respuesta correcta para avanzar.\nLas preguntas serán tipo test y tendrás que responder con:\nA\nB\nC\n🛰️ Portales de emergencia\nDispones de 3 portales de emergencia (comodines).\nSi no sabes una respuesta, podrás utilizar uno para saltar directamente al siguiente desafío.\n⚠️ Pero ten cuidado:\nLos portales son limitados.\Si fallas demasiadas veces y te quedas sin portales la misión fracasará.\n🎯 Objetivo final\nSupera todos los desafíos, activa el portal principal y escapa del vortex antes de que la estación espacial colapse por completo.\n¿Preparado/a para comenzar la misión?\n🌌 Buena suerte, astronauta.");
//Segona fase (joc complet)

// Preguntes i respostes
        const PREGUNTAS1 = ["(1/10)\n¿Qué número falta 🧮? 2, 4, 16, __. \na) 256\nb) 10\nc) 99",
                "(2/10)\n🧮 Si 5 + 7 × 2 = ¿? \na) 24 \nb) 19 \nc) 14",
                "(3/10)\nEnigma: Tengo llaves però no puedo abrir puertas 🔐. ¿Qué soy? \na) Un piano \nb) Un coche \nc) Una casa",
                "(4/10)\n¿Cuánto es 9 × 9 🧮? \na) 72 \nb) 99 \nc) 81",
                "(5/10)\nEnigma: Cuanto más me quites, más grande me hago 🧩. ¿Qué soy? \na) Un libro \nb) Un árbol \nc) Un agujero",
                "(6/10)\nTiene ojos pero no puede ver nada, tiene piel pero no siente el frío 🧩. ¿Qué es? \na) Una estatua de mármol \nb) Una patata \nc) Un abrigo de cuero",
                "(7/10)\nVas corriendo en una carrera de velocidad y adelantas a la persona que va en el segundo lugar 🧩. ¿En qué posición estás ahora?\na) Primero \nb) Segundo \nc) Tercero",
                "(8/10)\nTengo una cola brillante pero no soy un animal. Viajo por el espacio profundo y me deshago lentamente cuando me acerco al Sol 🧩. ¿Qué soy? \na) Un asteroide \nb) Un cometa \nc) Un cohete",
                "(9/10)\nSoy un lugar del espacio donde la gravedad es tan invisible como destructiva. Absorbo todo lo que se me acerca demasiado, y ni siquiera la luz puede escapar de mis manos 🧩. ¿Qué soy? \na) La cara oculta de la luna \nb) Una estrella de neutrones \nc) Un agujero negro",
                "(10/10)\nNo tengo luz propia, pero brillo en la noche. Cambio de forma cada semana, pero siempre soy la misma 🧩. ¿Qué soy? \na) Una estrella lejana. \nb) El planeta Marte. \nc) La Luna"];
        const PREGUNTAS = 11;
        const RESPUESTAS = ["a", "b", "a", "c", "c", "a", "b", "b", "c", "c"];
        let intentos = 3;
        let comodines = 3;
        let i = 0;
        do {
        let usuario = prompt(PREGUNTAS1[i]);
                if (usuario == RESPUESTAS[i]) {
        alert("🎯¡¡¡Respuesta correcta!!!🎯");
                i++;
        } else{
        alert("Respuesta incorrecta 🫵😂");
                if (comodines > 0) {
                let usarComodines = prompt("🌀🌀¿Quieres acceder a un portal de emergencia para escapar del enigma?🌀🌀");
                if (usarComodines == "si"){
                comodines--;
                alert("🌀🌀Has accedido a un portal de emergencia.🌀🌀 Te quedan: " + comodines);
                i++;
                }else{
                intentos--;
                alert("🛡Has perdido un intento, NO TE RINDAS!!!🛡. Te quedan: " + intentos); 
                }
        } else {
        intentos--;
        alert("🛡Has perdido un intento, NO TE RINDAS!!!🛡. Te quedan: " + intentos);
            }
            }

        } while (i < PREGUNTAS1.length && intentos > 0);
       
if (intentos == 0) {
alert("Misión fallida 😞, unos aliens te han lanzado un rayo hipersónico y te han desintegrado al instante. 🛸👽");
        } else {
alert("¡¡¡🎉Bien hecho🎉!!! Has completado la mision con éxito, toma tu premio 🤲🍔");
        }


