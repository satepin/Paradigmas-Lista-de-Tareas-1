/*
- La vista debe ser accesible al iniciar la app.
- Deben validarse las entradas. La personas usuaria no debe poder
   ingresar opciones fuera del menú.
- Deben verse, al menos, las 3 opciones deseadas: ver las tareas,
   buscar una tarea, agregar una tarea.
- Deben poder agregarse cualquier cantidad de tareas.
*/

import { mainMenu } from './mainMenu.js';
import { Task } from '../types/taskTypes.js';

function main(): void {
   const username: string = "Usuario"; // pedir nombre usuario
   let loop: boolean = true;
   // Lista de tareas en memoria (se pasa al menú)
   const listaTareas: Task[] = [];
   
   do {
      loop = mainMenu(listaTareas, username);
   } while (loop); // agregar salida al menu
}

main();