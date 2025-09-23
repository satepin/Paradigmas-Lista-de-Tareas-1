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

export function listado(tarea, filtros) {
    console.log(`\nTareas con estado: ${filtro}`);
    for (const i of filtros) {
        console.log(`[$i] - ${tarea[i].titulo}`);
    }
    console.log("\n¿Deseas ver el estado de alguna?");
    console.log("Introduce el numero para verla o 0 para volver.");
    //funcion elegir(tareas); no tiene archivo
    //funcion detalles(tarea);
}