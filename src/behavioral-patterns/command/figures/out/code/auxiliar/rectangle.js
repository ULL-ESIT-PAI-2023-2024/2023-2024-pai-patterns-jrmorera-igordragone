/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Rectangle class that implements the shape class.
 */
import { Shape } from './shape.js';
/** @classdesc A class to represent rectangles */
export class Rectangle extends Shape {
    width;
    height;
    /**
     * Create a rectangle using the shape constructor
     * @param {number} width - width of the rectangle
     * @param {number} height - height of the rectangle
     * @param {Coordinates2D} coordinates - position of the shape
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(width = 1, height = 1, coordinates = { xPosition: 0, yPosition: 0 }, style = { fillColor: '', strokeColor: '', strokeWidth: 2 }) {
        super(coordinates, style);
        this.width = width;
        this.height = height;
        const X_CENTROID_POSITION = coordinates.xPosition + width / 2;
        const Y__CENTROID_POSITION = coordinates.yPosition + height / 2;
        this.centroid = { xPosition: X_CENTROID_POSITION, yPosition: Y__CENTROID_POSITION };
    }
    /**
     * Calculates the area of the rectangle
     * @returns width * height
     */
    getArea() {
        return this.width * this.height;
    }
    /**
     * Draw the rectangle to screen
     */
    draw(renderingContext) {
        // saves the current styles set elsewhere to avoid overwriting them
        renderingContext.save();
        // set the styles for this shape
        renderingContext.fillStyle = this.style.fillColor;
        renderingContext.lineWidth = this.style.strokeWidth;
        // create the *path*
        renderingContext.beginPath();
        renderingContext.strokeStyle = this.style.strokeColor;
        renderingContext.rect(this.coordinates.xPosition, this.coordinates.yPosition, this.width, this.height);
        // draw the path to screen
        renderingContext.fill();
        renderingContext.stroke();
        // restores the styles from earlier preventing the colors used here
        // from polluting other drawings
        renderingContext.restore();
    }
    /**
     * Get the centroid position
     */
    getCentroid() {
        return this.centroid;
    }
}
//# sourceMappingURL=rectangle.js.map