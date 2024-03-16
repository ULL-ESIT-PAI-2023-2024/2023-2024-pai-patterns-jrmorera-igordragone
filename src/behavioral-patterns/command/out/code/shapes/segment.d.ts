/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Segment class that implements the shape class.
 */
import { Coordinates2D, Shape, ShapeStyle } from './shape.js';
/** @classdesc A class to represent lines */
export declare class Segment extends Shape {
    private firstPoint;
    private secondPoint;
    /**
     * Create a segment using the shape constructor
     * @param {Coordinates2D} firstPoint - one of the extremes, used for the
     *     position of the shape
     * @param {Coordinates2D} secondPoint - the other of the extremes
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(firstPoint?: Coordinates2D, secondPoint?: Coordinates2D, style?: ShapeStyle);
    /**
     * Calculates the area of the segment (always 0)
     * @returns 0
     */
    getArea(): number;
    /**
     * Draw the segment to screen
     */
    draw(renderingContext: CanvasRenderingContext2D): void;
    drawMiddle(renderingContext: CanvasRenderingContext2D): void;
    /**
     * Get the centroid position
     */
    getCentroid(): Coordinates2D;
}
