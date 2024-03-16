/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Shape class for representing a 2d figure
 */
/** @classdesc A class to represent rectangles */
export class Shape {
    coordinates;
    style;
    centroid = { xPosition: 0, yPosition: 0 };
    /**
     * Create a 2d shape
     * @param {Coordinates2D} coordinates - position of the shape
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(coordinates = { xPosition: 0, yPosition: 0 }, style = { fillColor: '', strokeColor: '', strokeWidth: 2 }) {
        this.coordinates = coordinates;
        this.style = style;
    }
    drawCentroid(renderingContext) {
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
}
//# sourceMappingURL=shape.js.map