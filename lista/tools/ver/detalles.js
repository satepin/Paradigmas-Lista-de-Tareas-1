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

import { prompt } from '../input/promptSync.js';
import { editar } from '../modificar/editar.js';

export function detalles(tarea) {
    console.clear();
    imprimirTarea(tarea);
    console.log("\nSi deseas editarla, pulsa E, o presiona 0 para salir.");
    let opcion = prompt("Elige una opcion: ", { maxLength: 1, puedeVacio: false });
    if (opcion.toLowerCase() === 'e') {
        //funcion editarTarea(tarea);
        editar(tarea);
    } else if (opcion === '0') {
        console.log("Saliendo...");
    }
}

export function imprimirTarea(tarea) {
        console.log("Esta es la tarea que elegiste:");
    console.log(`Titulo: ${tarea.titulo}`);
    console.log(`Descripcion: ${tarea.descripcion}`);
    console.log(`Estado: ${tarea.estado}`);
    console.log(`Dificultad: ${tarea.dificultad}`);
    console.log(`Vencimiento: ${tarea.vencimiento}`);
    console.log(`Creacion: ${tarea.creacion}`);
}