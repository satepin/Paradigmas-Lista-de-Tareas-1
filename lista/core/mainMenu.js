/*hola <nombre>
¿que deseas hacer?
1- Crear Tarea
2- Buscar una tarea
3- agregar una tarea
0- salir

deben validarse las entradas
*/

'use strict';
import { menuPrompt } from "../tools/input/promptSync.js";
import { ver } from "../tools/ver/ver.js";
import { buscar } from "../tools/ver/buscar.js";
import { agregar } from "../tools/alta/agregar.js";

function seeMainMenu(username) {
    console.log(`Hola ${username}`);
    console.log("¿Que deseas hacer?");
    console.log("1- Ver mis Tareas");
    console.log("2- Buscar una Tarea");
    console.log("3- Agregar una nueva Tarea");
    console.log("0- salir");
}

export function mainMenu(listaTareas, username) {
    seeMainMenu(username);
    let menuIndex = menuPrompt("", 0, 3);
    switch (menuIndex) {
        case 1:
            //ver tarea
            ver(listaTareas);
            break;
        case 2:
            //buscar una tarea
            buscar(listaTareas);
            break;
        case 3:
            //agregar una nueva tarea a la lista de tareas
            agregar(listaTareas);
            break;
        case 0:
            console.log("Saliendo...");
            return false;
        default:
            console.log("Opción no válida");
            break;
    }
    return true;
}