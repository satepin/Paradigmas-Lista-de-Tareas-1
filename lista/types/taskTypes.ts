// Types and interfaces for the task management system

export type TaskStatus = 'pendiente' | 'en curso' | 'completada' | 'cancelada';
export type TaskDifficulty = 'facil' | 'medio' | 'dificil';

export interface Task {
    titulo: string;
    descripcion: string;
    estado: TaskStatus;
    creacion: Date | null;
    uEdicion: Date | null;
    vencimiento: Date | null;
    dificultad: TaskDifficulty;
}

export interface ValidationFlag {
    maxLength: number;
    puedeVacio: boolean;
}

export interface TaskFlags {
    titulo: ValidationFlag;
    descripcion: ValidationFlag;
    estado: Map<TaskStatus, number>;
    dificultad: Map<TaskDifficulty, number>;
}