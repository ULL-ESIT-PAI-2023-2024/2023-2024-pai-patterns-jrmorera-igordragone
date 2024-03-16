/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file paint-program.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  16/03/2024
 * @brief Rectangle shape
 */
import { Coordinates2D, Shape, ShapeStyle } from './shape.js';
/** @classdesc A class to represent rectangles */
export declare class Rectangle extends Shape {
    private width;
    private height;
    /**
     * Create a rectangle using the shape constructor
     * @param {number} width - width of the rectangle
     * @param {number} height - height of the rectangle
     * @param {Coordinates2D} coordinates - position of the shape
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(width?: number, height?: number, coordinates?: Coordinates2D, style?: ShapeStyle);
    /**
     * Calculates the area of the rectangle
     * @returns width * height
     */
    getArea(): number;
    /**
     * Draw the rectangle to screen
     */
    draw(renderingContext: CanvasRenderingContext2D): void;
    /**
     * Get the centroid position
     */
    getCentroid(): Coordinates2D;
}
