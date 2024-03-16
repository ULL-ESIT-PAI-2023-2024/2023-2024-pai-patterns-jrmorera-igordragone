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
import { Triangle } from './triangle.js';
/// Allows to generate random shapes inside a canvas
export class RandomShapeGenerator {
    canvas;
    randomCounter = 0; /// Used for replicable random behaviour
    /// Creates a generator with a particular canvas to generate on
    constructor(canvas) {
        this.canvas = canvas;
    }
    /**
     * Draws a rectangle with random size on the given position and style
     * @param coordinates the position
     * @param style the color and stroke data
     */
    getRandomRectangle(coordinates = this.getRandomCoordinates(), style = this.getRandomStyle()) {
        const MAX_WIDTH = 100;
        const MAX_HEIGHT = 100;
        const MIN_SIZE = 40;
        const width = MIN_SIZE + this.getRandomNumber() * MAX_WIDTH;
        const height = MIN_SIZE + this.getRandomNumber() * MAX_HEIGHT;
        return new Rectangle(width, height, coordinates, style);
    }
    /**
     * Draws a circle with random size on the given position and style
     * @param coordinates the position
     * @param style the color and stroke data
     */
    getRandomCircle(coordinates = this.getRandomCoordinates(), style = this.getRandomStyle()) {
        const MAX_RADIUS = 40;
        const MIN_RADIUS = 20;
        const radius = MIN_RADIUS + this.getRandomNumber() * MAX_RADIUS;
        return new Circle(radius, coordinates, style);
    }
    /**
     * Draws a triangle with random size on the given position and style
     * @param coordinates the position
     * @param style the color and stroke data
     */
    getRandomTriangle(coordinates = this.getRandomCoordinates(), style = this.getRandomStyle()) {
        const MAX_WIDTH = 100;
        const MAX_HEIGHT = 100;
        const MIN_SIZE = 40;
        const width = MIN_SIZE + this.getRandomNumber() * MAX_WIDTH;
        const height = MIN_SIZE + this.getRandomNumber() * MAX_HEIGHT;
        return new Triangle(width, height, coordinates, style);
    }
    resetRandom() {
        this.randomCounter = 0;
    }
    /**
     * Generates a random position inside the canvas
     * @returns the appropiate coordinates
     */
    getRandomCoordinates() {
        const xPosition = this.getRandomNumber() * this.canvas.width;
        const yPosition = this.getRandomNumber() * this.canvas.height;
        return { xPosition, yPosition };
    }
    /**
     * Generates a random style, with a random color and stroke width
     * @returns the created style
     */
    getRandomStyle() {
        const COLORS = [
            'salmon', 'lightgreen', 'lightblue', 'lightcoral', 'lightseagreen', 'orangered', 'darkorchid', 'seaGreen',
            'sienna', 'goldenrod', 'royalblue', 'crimson', 'olivedrab', 'mediumpurple'
        ];
        const randomColor = COLORS[Math.floor(this.getRandomNumber() * COLORS.length)];
        const fillColor = randomColor;
        const strokeColor = randomColor;
        const MAX_WIDTH = 5;
        const strokeWidth = this.getRandomNumber() * MAX_WIDTH; // Random stroke width up to 5 pixels
        return { fillColor, strokeColor, strokeWidth };
    }
    /// Function for generating random numbers. Needed to make the random shapes replicable
    getRandomNumber() {
        this.randomCounter += 1;
        this.randomCounter = Math.sin(this.randomCounter) * 10000;
        return this.randomCounter - Math.floor(this.randomCounter);
    }
}
//# sourceMappingURL=random_shapes_generator.js.map