'use strict';
import promptSync from 'prompt-sync';

let input = promptSync();

//funcion que toma input y parametros y lo valida para las flags dadas (longitud y vacio)
export function prompt(question, flags) {
    input = input.question(question);
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

//funcion que recibe numeros y los valida para servir en la navegacion de menus.
//si el numero no es entero lo trunca. si el numero no es valido reintenta
export function menuPrompt(question, min, max) {
    let opcion = input.question(question);
    if (isNaN(opcion) || opcion < min || opcion > max) {
        console.log("Opcion invalida, intentalo de nuevo.");
        return menuPrompt(question, min, max);
    }
    return Math.trunc(opcion);
}

//funcion que recibe numeros en formato yyyy/mm/dd, los valida y los retorna como fecha
export function datePrompt() {
    const input = {day, month, year};
    //validar que sean numeros y que esten en rango
    if (dateIsValid(input.day, 2) && dateIsValid(input.month, 2) && dateIsValid(input.year, 4)) {
        return new Date(input.year, input.month - 1, input.day);
    }
}

function dateIsValid(input, largo) {
    //validar que la fecha sea valida
    if (!(isNaN(input))) {
        //validar longitud y rango
        if (input.length == largo) {
            return true;
        }
    }
    return false;
}

