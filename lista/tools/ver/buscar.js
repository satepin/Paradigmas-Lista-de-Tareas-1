/* Desde el Menú Principal, si selecciono la opción 2, debo poder acceder al
menú Buscar una Tarea de forma que pueda ingresar una palabra (o conjunto de palabras)
y buscar las tareas cuyo título contenga esta clave de búsqueda.
Si hay tareas que cumplan con la condición,
me gustaría verlas listadas de forma similar al listado de tareas, con las mismas opciones.
Si no hay tareas que cumplan la condición, me gustaría ver un aviso.

Introduce el titulo de una tarea para buscarla
>
Estas son las tareas relacionadas
[i] - nombre tarea

deseas ver los detalles de alguna?
introduce el numero para verla o 0 para volver.

--

no hay tareas relacionadas con la busqueda
presiona cualquier tecla para continuar...

- Nuestra persona usuaria debe poder ingresar un string de búsqueda.
- El string de búsqueda debe compararse con los Títulos de las tareas.
    Una tarea se considera parte del resultado de búsqueda si su título
    contiene el valor buscado.

- Si hay resultado de búsqueda, debe mostrarse un listado de tareas similar
    al menú ***Listado de Tareas***.

- Si no hay resultado de búsqueda, debe mostrarse un mensaje de aviso.

- La persona debe poder volver al Menu principal o al Menu anterior
    (a criterio del equipo de desarrollo)
*/
'use strict';

import { prompt } from "../input/promptSync.js";
import { taskFlags } from '../../core/task.js';
import { listado } from '../ver/listado.js';
//recibe la lista de tareas y pide ingresar un string para buscar en los titulos
//muestra el listado de tareas que coincidan con la busqueda
//si no hay coincidencias, muestra un mensaje
export function buscar(listaTareas) {
    console.clear();
    console.log("Buscar Tarea");
    let busqueda = prompt("Introduce el titulo de una tarea para buscarla: ", taskFlags.titulo);
    let resultados = [];
    for (const tarea of listaTareas) {
        if (tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())) {
            resultados.push(tarea);
        }
    }
    if (resultados.length > 0) {
        listado(resultados, busqueda);
        //funcion elegir(resultados); no tiene archivo
        //funcion detalles(tarea); no tiene archivo
    } else {
        console.log("\nNo hay tareas relacionadas con la busqueda");
    }
    //presione cualquier tecla para continuar...
}