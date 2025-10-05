/* ¿que tareas deseas ver?
1- todas
2- pendientes
3- en curso
4- terminadas
0- volver

deben validarse las entradas

ver.ts es el menu que da a elegir el filtro para listado.ts
*/

import { menuPrompt } from '../input/promptSync.js';
import { listado } from './listado.js';
import { Task } from '../../types/taskTypes.js';

export function ver(tareas: Task[]): void {
    console.clear();
    console.log("¿Que tareas deseas ver?");
    console.log("1- Todas");
    console.log("2- Pendientes");
    console.log("3- En curso");
    console.log("4- Terminadas");
    console.log("0- Volver");
    
    const opcion: number = menuPrompt("Elige una opcion: ", 0, 4);
    if (opcion === 0) { return; }
    
    let filtradas: Task[] = [];
    if (opcion === 1) { 
        filtradas = tareas; 
    }
    if (opcion === 2) {
        for (const t of tareas) { 
            if (t.estado === 'pendiente') { 
                filtradas.push(t); 
            } 
        }
    }
    if (opcion === 3) {
        for (const t of tareas) { 
            if (t.estado === 'en curso') { 
                filtradas.push(t); 
            } 
        }
    }
    if (opcion === 4) {
        for (const t of tareas) { 
            if (t.estado === 'completada') { 
                filtradas.push(t); 
            } 
        }
    }
    listado(filtradas, opcion);
}