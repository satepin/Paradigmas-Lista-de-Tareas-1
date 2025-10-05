/* estas editando la tarea <nombre>
- si deseas mantener los valores de un atributo, simplemente dejalo en blanco
- si deseas dejar en blanco un atributo, escribe un espacio

1. ingresa la descripcion
2- estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada)
3- dificultad ([1] / [2] / [3])
4- vencimiento (dd/mm/aaaa)

¡Datos Guardados!
presiona cualquier tecla para continuar...

modificar ultima edicion al momento de editar
debe informarse que la tarea fue guardada
debe poder volverse al menu previo o inicial
*/

import { prompt, set } from '../input/promptSync.js';
import { taskFlags } from "../../core/task.js";
import { Task } from '../../types/taskTypes.js';

export function editar(tarea: Task): void {
    console.clear();
    console.log(`Estas editando la tarea ${tarea.titulo}`);
    console.log("- si deseas mantener los valores de un atributo, simplemente dejalo en blanco");
    console.log("- si deseas dejar en blanco un atributo, escribe un espacio\n");
    
    //1. ingresa la descripcion
    const descripcion: string = prompt("1. Ingresa la descripcion: ", taskFlags.descripcion);
    //2- estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada)
    const estado = set(taskFlags.estado);
    //3- dificultad ([1] / [2] / [3])
    const dificultad = set(taskFlags.dificultad);
    //4- vencimiento (dd/mm/aaaa) no hay codigo para recibir fechas aun
    
    //modificar ultima edicion al momento de editar
    const fechaActual: Date = new Date();
    
    //actualizar la tarea
    if (descripcion === '') { 
        /* mantener */ 
    } else if (descripcion === ' ') { 
        tarea.descripcion = ''; 
    } else { 
        tarea.descripcion = descripcion; 
    }
    
    tarea.estado = estado;
    tarea.dificultad = dificultad;
    //tarea.vencimiento = vencimiento;
    tarea.uEdicion = fechaActual;
    
    console.log("\n¡Datos Guardados!");
    console.log(tarea);
    //presione cualquier tecla para continuar...
}