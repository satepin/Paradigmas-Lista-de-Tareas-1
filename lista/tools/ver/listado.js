/*estas son todas tus tareas
[i] - nombre tarea

¿deseas ver el estado de alguna?
introduce el numero para verla o 0 para volver.

deben verse las que cumplan la condicion
deben validarse las entradas
debajo de la lista permitir elegir una y ver detalles
opcion de finalizar/salir
accesible desde cualquier opcion de ver mis tareas

deben poder verse en un determinado orden // opcion para determinarlo?

ver.js recibe la lista de tareas y las muestra segun el filtro que recibe
los criterios de busqueda son ingresados fuera del codigo
*/

'use strict';

import { menuPrompt } from "../input/promptSync.js";
import { detalles } from "./detalles.js";

// Muestra un listado simple de tareas que coinciden con la búsqueda/filtrado
// tareas: Array<{ titulo: string, ... }>
// etiqueta: string que describe el listado (por ejemplo, el término buscado)
export function listado(tareas, etiqueta = '') {
    if (etiqueta) console.log(`\nResultados para: ${etiqueta}`);
    if (!Array.isArray(tareas) || tareas.length === 0) {
        console.log('No hay tareas para mostrar.');
        return;
    }
    tareas.forEach((t, i) => {
        console.log(`[${i + 1}] - ${t.titulo}`);
    });
    console.log("\n¿Deseas ver los detalles de alguna?");
    elegir(tareas);
}

function elegir(tareas) {
    const index = menuPrompt("Introduce el número de la tarea a ver o 0 para volver: ", 0, tareas.length);
    if (index === 0) return;
    detalles(tareas[index - 1]);
}