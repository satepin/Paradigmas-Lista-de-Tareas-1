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

agregar.js recibe una tarea creada y verificada en crear.js y la agrega a una lista de tareas
*/

import { crear } from './crear.js';

export function agregar(listaTareas) {
    console.clear();
    console.log("Agregar Tarea");
    const nuevaTarea = crear();
    listaTareas.push(nuevaTarea);
    console.log("\n¡Tarea Agregada a la Lista!");
    console.log(`Total de Tareas: ${listaTareas.length}`);
    //presione cualquier tecla para continuar...
    return listaTareas;
}