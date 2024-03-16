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
 * @brief Abstract shape class
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
