/* Estas creando una nueva tarea
1. Ingresa el titulo: -
2. Ingresa la descripcion: -
3. estado (pendiente, en curso, terminada): -
4. dificultad (facil, medio, dificil): -
5. vencimiento (dd/mm/aaaa): -

¡Datos Guardados!
presiona cualquier tecla para continuar...

- Nuestra persona usuaria debe poder ingresar un cada atributo por separado.
- Para el atributo Estado, deben darse opciones de ingreso, ya que los valores son acotados.
- Para el atributo Dificultad, deben darse opciones de ingreso, ya que los valores son acotados.
- Debe informarse que se han guardado los datos.
- La persona debe poder volver al Menu principal o al Menu anterior (a criterio del equipo de desarrollo)
- Fecha de Vencimiento (BONUS)


crear.js se encarga de la creacion y validacion de una unica unidad de tarea, que sera retornada para su manejo en agregar.js
*/

import { prompt, set } from '../../input/promptSync.js';
import { taskFlags } from '../../core/task.js';

export function crear() {
    console.clear();
    console.log("Estas creando una nueva tarea");

    // 1. Título
    let titulo = prompt("1. Ingresa el titulo: ", taskFlags.titulo);

    // 2. Descripción
    let descripcion = prompt("2. Ingresa la descripcion: ", taskFlags.descripcion);

    // 3. Estado

    let estado = set(taskFlags.estado);

    // 4. Dificultad

    let dificultad = set(taskFlags.dificultad);
    // 5. Vencimiento (BONUS)
    // Fechas de creación y edición
    // Crear la tarea usando el template
    const nuevaTarea = {
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        creacion: fechaActual,
        uEdicion: fechaActual,
        vencimiento: vencimiento,
        dificultad: dificultad
    };

    console.log("\n¡Datos Guardados!");
    console.log(nuevaTarea);

    //presione cualquier tecla para continuar...

    return nuevaTarea;
}