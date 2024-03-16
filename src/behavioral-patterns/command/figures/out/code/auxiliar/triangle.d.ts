/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Triangle class that uses the shape class.
 */
import { Coordinates2D, Shape, ShapeStyle } from './shape.js';
/** @classdesc A class to represent triangles */
export declare class Triangle extends Shape {
    private width;
    private height;
    /**
     * Create a triangle using the shape constructor
     * @param {number} width - width of the triangle
     * @param {number} height - height of the triangle
     * @param {Coordinates2D} coordinates - position of the shape
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(width?: number, height?: number, coordinates?: Coordinates2D, style?: ShapeStyle);
    /**
     * Calculates the area of the triangle
     * @returns width * height
     */
    getArea(): number;
    /**
     * Draw the triangle to screen
     */
    draw(renderingContext: CanvasRenderingContext2D): void;
    /**
     * Get the centroid position
     */
    getCentroid(): Coordinates2D;
}
