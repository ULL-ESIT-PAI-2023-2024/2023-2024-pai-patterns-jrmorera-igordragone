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
import { Shape } from './shape.js';
/** @classdesc A class to represent lines */
export class Segment extends Shape {
    firstPoint;
    secondPoint;
    /**
     * Create a segment using the shape constructor
     * @param {Coordinates2D} firstPoint - one of the extremes, used for the
     *     position of the shape
     * @param {Coordinates2D} secondPoint - the other of the extremes
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(firstPoint = { xPosition: 0, yPosition: 0 }, secondPoint = { xPosition: 0, yPosition: 0 }, style = { fillColor: '', strokeColor: '', strokeWidth: 2 }) {
        super(firstPoint, style);
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        const MIDDLE_POINT_X = (this.firstPoint.xPosition + this.secondPoint.xPosition) / 2;
        const MIDDLE_POINT_Y = (this.firstPoint.yPosition + this.secondPoint.yPosition) / 2;
        this.centroid = { xPosition: MIDDLE_POINT_X, yPosition: MIDDLE_POINT_Y };
    }
    /**
     * Calculates the area of the segment (always 0)
     * @returns 0
     */
    getArea() {
        return 0;
    }
    /**
     * Draw the segment to screen
     */
    draw(renderingContext) {
        renderingContext.save();
        // set the styles for this shape
        renderingContext.fillStyle = this.style.fillColor;
        renderingContext.lineWidth = this.style.strokeWidth;
        // create the *path*
        renderingContext.beginPath();
        // Move to the starting point of the triangle
        renderingContext.strokeStyle = this.style.strokeColor;
        renderingContext.moveTo(this.firstPoint.xPosition, this.firstPoint.yPosition);
        // Draw a line to the second point 
        renderingContext.lineTo(this.secondPoint.xPosition, this.secondPoint.yPosition);
        // draw the path to screen
        renderingContext.fill();
        renderingContext.stroke();
        // restores the styles from earlier
        renderingContext.restore();
    }
    drawMiddle(renderingContext) {
        renderingContext.save();
        // set the styles for this shape
        renderingContext.fillStyle = 'black';
        const POINT_SIZE = 4;
        // create the *path*
        renderingContext.beginPath();
        renderingContext.strokeStyle = this.style.strokeColor;
        renderingContext.arc(this.centroid.xPosition, this.centroid.yPosition, POINT_SIZE, 0, 2 * Math.PI);
        // draw the path to screen
        renderingContext.fill();
        // restores the styles from earlier
        renderingContext.restore();
    }
    /**
     * Get the centroid position
     */
    getCentroid() {
        return this.centroid;
    }
}
//# sourceMappingURL=segment.js.map