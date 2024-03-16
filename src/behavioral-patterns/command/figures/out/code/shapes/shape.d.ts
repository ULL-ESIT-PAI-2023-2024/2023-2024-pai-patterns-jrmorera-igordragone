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
export type Coordinates2D = {
    xPosition: number;
    yPosition: number;
};
export type ShapeStyle = {
    fillColor: string;
    strokeColor: string;
    strokeWidth: number;
};
/** @classdesc A class to represent rectangles */
export declare abstract class Shape {
    protected coordinates: Coordinates2D;
    protected style: ShapeStyle;
    protected centroid: Coordinates2D;
    /**
     * Create a 2d shape
     * @param {Coordinates2D} coordinates - position of the shape
     * @param {ShapeStyle} style - appearance of the shape
     */
    constructor(coordinates?: Coordinates2D, style?: ShapeStyle);
    /** Calculates the area */
    abstract getArea(): number;
    /** draw shape to screen */
    abstract draw(renderingContext: CanvasRenderingContext2D): void;
    /** returns the shape centroid position */
    abstract getCentroid(): Coordinates2D;
    drawCentroid(renderingContext: CanvasRenderingContext2D): void;
}
