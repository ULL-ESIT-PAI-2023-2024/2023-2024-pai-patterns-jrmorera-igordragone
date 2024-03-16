/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Circle class that implements the shape class.
 */
import { Coordinates2D, Shape, ShapeStyle } from './shape.js';
/** @classdesc A class to represent circles */
export declare class Circle extends Shape {
    private radius;
    /**
     * Create a circle using the shape constructor
     * @param {number} radius - radius of the sphere
     * @param {Coordinates2D} coordinates - position of the shape
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(radius?: number, coordinates?: Coordinates2D, style?: ShapeStyle);
    /**
     * Calculates the area of the circle
     * @returns PI * r^2
     */
    getArea(): number;
    /**
     * Draw the circle to screen
     */
    draw(renderingContext: CanvasRenderingContext2D): void;
    /**
     * Get the centroid position
     */
    getCentroid(): Coordinates2D;
}
