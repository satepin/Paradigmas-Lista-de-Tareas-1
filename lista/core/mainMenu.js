/*hola <nombre>
¿que deseas hacer?
1- Crear Tarea
2- Buscar una tarea
3- agregar una tarea
0- salir

deben validarse las entradas
*/
import { menuPrompt } from "../tools/input/promptSync";
import { ver } from "../tools/ver/ver.js";
import { buscar } from "../tools/buscar/buscar.js";
import { agregar } from "../tools/alta/agregar.js";

function seeMainMenu(username) {
    console.log(`Hola ${username}`);
    console.log("¿Que deseas hacer?");
    console.log("1- Crear Tarea");
    console.log("2- Buscar una tarea");
    console.log("3- agregar una tarea");
    console.log("0- salir");
}

function mainMenu(listaTareas) {
    let menuIndex = menuPrompt();
    seeMainMenu(username);
    switch (menuIndex) {
        case 1:
            //ver la lista de tareas
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
            break; 
    }
}