import promptSync from 'prompt-sync';
import { ValidationFlag } from '../../types/taskTypes.js';

const ask = promptSync({ sigint: true });

// función que toma input y parametros y lo valida para las flags dadas (longitud y vacio)
export function prompt(question: string, flags: ValidationFlag = { maxLength: Infinity, puedeVacio: false }): string {
    while (true) {
        let value: string = ask(question);
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

export function set<T>(flags: Map<T, number>): T {
    // escribir todas las opciones que el mapa tiene
    for (let [tipo, posicion] of flags) {
        console.log(`${posicion} - ${tipo}`);
    }
    while (true) {
        const opcion: string = ask("Elige una opcion: ");
        for (let [tipo, posicion] of flags) {
            if (String(opcion) === String(posicion)) {
                return tipo;
            }
        }
        console.log("Opción inválida, intenta nuevamente.");
    }
}

// función que recibe números y los valida para servir en la navegación de menús.
// si el número no es entero lo trunca. si el número no es válido reintenta
export function menuPrompt(question: string, min: number, max: number): number {
    while (true) {
        const raw: string = ask(question);
        const num: number = Number(raw);
        if (!Number.isFinite(num)) {
            console.log('Ingresa un número válido.');
            continue;
        }
        const n: number = Math.trunc(num);
        if (n < min || n > max) {
            console.log(`Ingresa un número entre ${min} y ${max}.`);
            continue;
        }
        return n;
    }
}

// función que recibe números en formato yyyy/mm/dd, los valida y los retorna como fecha
export function datePrompt(question: string = 'Fecha (yyyy/mm/dd): ', allowEmpty: boolean = true): Date | null {
    const re = /^(\d{4})[/-](\d{2})[/-](\d{2})$/;
    while (true) {
        const s: string = ask(question);
        if (allowEmpty && s.trim() === '') return null;
        const m = s.match(re);
        if (!m) { 
            console.log('Formato inválido. Usa aaaa/mm/dd.'); 
            continue; 
        }
        const yyyy: number = Number(m[1]);
        const mm: number = Number(m[2]);
        const dd: number = Number(m[3]);
        const d: Date = new Date(yyyy, mm - 1, dd);
        if (d.getFullYear() === yyyy && d.getMonth() === mm - 1 && d.getDate() === dd) {
            return d;
        }
        console.log('Fecha inválida.');
    }
}