/*hola <nombre>
¿que deseas hacer?
1- Crear Tarea
2- Buscar una tarea
3- agregar una tarea
0- salir

deben validarse las entradas
*/
function seeMainMenu(username) {
    console.log(`Hola ${username}`);
    console.log("¿Que deseas hacer?");
    console.log("1- Crear Tarea");
    console.log("2- Buscar una tarea");
    console.log("3- agregar una tarea");
    console.log("0- salir");
}

function mainMenu(username) {
    let menuIndex = 0;
    seeMainMenu(username);
    switch (menuIndex) {
        case 1:
            //funcion verTarea();
            ver();
            break;
        case 2:
            //funcion buscarTarea();
            buscar();
            break;
        case 3:
            //funcion agregarTarea();
            agregar();
            break;
        case 0:
            console.log("Saliendo...");
            break; 
    }
}