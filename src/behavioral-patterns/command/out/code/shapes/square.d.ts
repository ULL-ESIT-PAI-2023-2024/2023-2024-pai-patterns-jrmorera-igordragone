/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Square class that implements the shape class.
 */
import { Coordinates2D, Shape, ShapeStyle } from './shape.js';
/** @classdesc A class to represent squares */
export declare class Square extends Shape {
    private sideSize;
    /**
     * Create a square using the shape constructor
     * @param {number} sideSize - length of a side of the square
     * @param {Coordinates2D} coordinates - position of the shape
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(sideSize?: number, coordinates?: Coordinates2D, style?: ShapeStyle);
    /**
     * Calculates the area of the square
     * @returns side * side
     */
    getArea(): number;
    /**
     * Draw the square to screen
     */
    draw(renderingContext: CanvasRenderingContext2D): void;
    /**
     * Get the centroid position
     */
    getCentroid(): Coordinates2D;
}
