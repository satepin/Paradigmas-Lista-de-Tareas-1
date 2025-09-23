/* Esta es la tarea que elegiste:
 <nombre>
 <descripcion>

 <estado>
 <dificultad>
 <vencimiento>
 <creacion>

 si deseas editarla, pulsa E, o presiona 0 para salir.

 si un dato es vacio, indicarlo con una leyenda
 brindar la opcion de elegir tarea para ir al menu ver detalles (elegir otra directamente)
 al salir, volver al menu principal o anterior
 usar emojis para representar estados y dificultades
 validar entradas

 detalles.js recibe una tarea y muestra sus detalles, ademas de brindar la opcion de editarla
 
 dividir en dos secciones: ver detalles y editar
 */
'use strict';

import readline from 'readline-sync';

export function detalles(tarea) {
    console.clear();
    console.log("Esta es la tarea que elegiste:");
    console.log(`Titulo: ${tarea.titulo}`);
    console.log(`Descripcion: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Dificultad: ${tarea.dificultad}`);
    console.log(`Vencimiento: ${tarea.vencimiento}`);
    console.log(`Creacion: ${tarea.creacion}`);
    console.log("\nSi deseas editarla, pulsa E, o presiona 0 para salir.");
    let opcion = readline.question("Elige una opcion: ");
    if (opcion.toLowerCase() === 'e') {
        //funcion editarTarea(tarea);
        console.log("Editar Tarea - Funcion en desarrollo");
    } else if (opcion === '0') {
        console.log("Saliendo...");
    }
}