import readline from 'readline-sync';

let input;


//funcion que toma input y parametros y lo valida para las flags dadas (longitud y vacio)
export function prompt(question, flags) {
    input = readline.question(question);
    if (input.length > flags.maxLength) {
        input.slice(0, flags.maxLength);
        console.log(`Se ha recortado el texto a ${flags.maxLength} caracteres.`);
    }
    if (flags.puedeVacio == true) {
        /*verificar si es vacio
        de serlo, retornar leyenda de vacio
        */
    }
}

export function set(flags) {
    //escribir todas las opciones que el mapa tiene
    for (let [tipo, posicion] of flags) {
        console.log(`${posicion} - ${tipo}`);
    }
    let opcion = readline.question("Elige una opcion: ");
    //validar que la opcion sea correcta
    for (let [tipo, posicion] of flags) {
        if (opcion == posicion) {
            return tipo;
        }
    }
    console.log("Opcion invalida, se asignara el valor por defecto.");
    return 1; //valor por defecto

}