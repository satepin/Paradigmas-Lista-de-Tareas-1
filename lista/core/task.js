let titulo; //cualquiera hast 100 caracteres, no vacio
let descripcion; //cualquiera hasta 500 caracteres, puede estar vacio
let estado; //pendiente, en curso, completada, cancelada. por defecto pendiente
let creacion; //cualquier fecha valida, puede ser vacia o la fecha en que se cargo
let uEdicion; //cualquier fecha valida, puede ser vacia o tener inicialmente la fecha de creacion
let vencimiento; //cualquier fecha valida, puede ser vacia
let dificultad; //facil, medio, dificil. por defecto facil

const task = {
    titulo: titulo,
    descripcion: descripcion,
    estado: estado,
    creacion: creacion,
    uEdicion: uEdicion,
    vencimiento: vencimiento,
    dificultad: dificultad
}

const listaTareas = []; //lista de tareas

//flags de validacion

const flagTitulo = {
    maxLength: 100,
    puedeVacio: false
}

const flagDescripcion = {
    maxLength: 500,
    puedeVacio: true
}

const flagEstado = new Map ([["pendiente",1],["en curso",2],["completada",3],["cancelada",4]]);

const flagDificultad = new Map ([["facil",1],["medio",2],["dificil",3]]);

const taskFlags = {
    titulo: flagTitulo,
    descripcion: flagDescripcion,
    estado: flagEstado,
    dificultad: flagDificultad
}

export {task, taskFlags, listaTareas};
 //importar fechas