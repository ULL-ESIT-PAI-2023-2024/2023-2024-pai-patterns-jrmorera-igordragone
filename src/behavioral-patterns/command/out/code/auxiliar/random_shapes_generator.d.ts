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
 * @brief Random shapes generator
 */
import { Circle } from './circle.js';
import { Rectangle } from './rectangle.js';
import { Coordinates2D, ShapeStyle } from './shape.js';
import { Triangle } from './triangle.js';
export declare class RandomShapeGenerator {
    private canvas;
    private randomCounter;
    constructor(canvas: HTMLCanvasElement);
    /**
     * Draws a rectangle with random size on the given position and style
     * @param coordinates the position
     * @param style the color and stroke data
     */
    getRandomRectangle(coordinates?: Coordinates2D, style?: ShapeStyle): Rectangle;
    /**
     * Draws a circle with random size on the given position and style
     * @param coordinates the position
     * @param style the color and stroke data
     */
    getRandomCircle(coordinates?: Coordinates2D, style?: ShapeStyle): Circle;
    /**
     * Draws a triangle with random size on the given position and style
     * @param coordinates the position
     * @param style the color and stroke data
     */
    getRandomTriangle(coordinates?: Coordinates2D, style?: ShapeStyle): Triangle;
    resetRandom(): void;
    /**
     * Generates a random position inside the canvas
     * @returns the appropiate coordinates
     */
    private getRandomCoordinates;
    /**
     * Generates a random style, with a random color and stroke width
     * @returns the created style
     */
    private getRandomStyle;
    private getRandomNumber;
}
