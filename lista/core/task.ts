import { Task, TaskFlags, TaskStatus, TaskDifficulty, ValidationFlag } from '../types/taskTypes.js';

// Default task template
const task: Task = {
    titulo: '',
    descripcion: '',
    estado: 'pendiente',
    creacion: null,
    uEdicion: null,
    vencimiento: null,
    dificultad: 'facil'
};

// Lista de tareas en memoria
const listaTareas: Task[] = [];

// Validation flags
const flagTitulo: ValidationFlag = {
    maxLength: 100,
    puedeVacio: false
};

const flagDescripcion: ValidationFlag = {
    maxLength: 500,
    puedeVacio: true
};

const flagEstado = new Map<TaskStatus, number>([
    ["pendiente", 1],
    ["en curso", 2], 
    ["completada", 3],
    ["cancelada", 4]
]);

const flagDificultad = new Map<TaskDifficulty, number>([
    ["facil", 1],
    ["medio", 2],
    ["dificil", 3]
]);

const taskFlags: TaskFlags = {
    titulo: flagTitulo,
    descripcion: flagDescripcion,
    estado: flagEstado,
    dificultad: flagDificultad
};

export { task, taskFlags, listaTareas };