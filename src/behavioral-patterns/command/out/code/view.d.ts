/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  View class for rendering 2d figures
 */
import { Shape } from './shapes/shape.js';
/** @classdesc A class to visualize shapes on a canvas */
export declare class View {
    private readonly canvas;
    private readonly renderingContext;
    /**
     * Buils a view object for a canvas
     * @param canvas the element where figures will be drawn
     */
    constructor();
    getCanvas(): HTMLCanvasElement;
    /**
     * Draws a shape on the canvas
     * @param shape the shape to be drawn
     * @returns void
     */
    drawShape(shape: Shape): void;
}
