'use strict';
import promptSync from 'prompt-sync';

const ask = promptSync({ sigint: true });

// funcion que toma input y parametros y lo valida para las flags dadas (longitud y vacio)
// flags: { maxLength: number, puedeVacio: boolean }
export function prompt(question, flags = { maxLength: Infinity, puedeVacio: false }) {
    while (true) {
        let value = ask(question);
        if (!flags.puedeVacio && value.trim().length === 0) {
            console.log('La entrada no puede estar vacía.');
            continue;
        }
        if (value.length > flags.maxLength) {
            console.log(`Se ha recortado el texto a ${flags.maxLength} caracteres.`);
            value = value.slice(0, flags.maxLength);
        }
        return value;
    }
}

export function set(flags) {
    // escribir todas las opciones que el mapa tiene
    for (let [tipo, posicion] of flags) {
        console.log(`${posicion} - ${tipo}`);
    }
    while (true) {
        const opcion = ask("Elige una opcion: ");
        for (let [tipo, posicion] of flags) {
            if (String(opcion) == String(posicion)) {
                return tipo;
            }
        }
        console.log("Opción inválida, intenta nuevamente.");
    }
}

//funcion que recibe numeros y los valida para servir en la navegacion de menus.
//si el numero no es entero lo trunca. si el numero no es valido reintenta
export function menuPrompt(question, min, max) {
    while (true) {
        const raw = ask(question);
        const num = Number(raw);
        if (!Number.isFinite(num)) {
            console.log('Ingresa un número válido.');
            continue;
        }
        const n = Math.trunc(num);
        if (n < min || n > max) {
            console.log(`Ingresa un número entre ${min} y ${max}.`);
            continue;
        }
        return n;
    }
}

//funcion que recibe numeros en formato yyyy/mm/dd, los valida y los retorna como fecha
export function datePrompt(question = 'Fecha (yyyy/mm/dd): ', allowEmpty = true) {
    const re = /^(\d{4})[/-](\d{2})[/-](\d{2})$/;
    while (true) {
        const s = ask(question);
        if (allowEmpty && s.trim() === '') return '';
        const m = s.match(re);
        if (!m) { console.log('Formato inválido. Usa aaaa/mm/dd.'); continue; }
        const yyyy = Number(m[1]);
        const mm = Number(m[2]);
        const dd = Number(m[3]);
        const d = new Date(yyyy, mm - 1, dd);
        if (d.getFullYear() === yyyy && d.getMonth() === mm - 1 && d.getDate() === dd) {
            return d;
        }
        console.log('Fecha inválida.');
    }
}

function dateIsValid(input, largo) {
    // función auxiliar ya no utilizada; se conserva por compatibilidad mínima
    if (typeof input !== 'string') return false;
    if (input.length !== largo) return false;
    return !isNaN(Number(input));
}

