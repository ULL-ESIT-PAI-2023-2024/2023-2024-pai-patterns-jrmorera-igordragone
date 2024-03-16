/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Program for drawing shapes of random properties in a canvas
 */
import { RandomShapeGenerator } from './auxiliar/random_shapes_generator.js';
import { View } from './auxiliar/view.js';
export declare class PaintProgram {
    private readonly VIEW;
    private readonly GENERATOR;
    constructor(VIEW?: View, GENERATOR?: RandomShapeGenerator);
    drawCircle(): void;
    drawRectangle(): void;
    drawTriangle(): void;
}
