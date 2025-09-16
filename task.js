let titulo; //cualquiera hast 100 caracteres, no vacio
let descripcion; //cualquiera hasta 500 caracteres, puede estar vacio
let estado; //pendiente, en curso, completada, cancelada. por defecto pendiente
let creacion; //cualquier fecha valida, puede ser vacia o la fecha en que se cargo
let uEdicion; //cualquier fecha valida, puede ser vacia o tener inicialmente la fecha de creacion
let vencimiento; //cualquier fecha valida, puede ser vacia
let dificultad; //facil, medio, dificil. por defecto facil

let task = {
    titulo: titulo,
    descripcion: descripcion,
    estado: estado,
    creacion: creacion,
    uEdicion: uEdicion,
    vencimiento: vencimiento,
    dificultad: dificultad
}