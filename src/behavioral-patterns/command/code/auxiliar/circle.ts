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
 * @brief Circle shape
 */
import {Coordinates2D, Shape, ShapeStyle} from './shape.js'

/** @classdesc A class to represent circles */
export class Circle extends Shape {
  /**
   * Create a circle using the shape constructor
   * @param {number} radius - radius of the sphere
   * @param {Coordinates2D} coordinates - position of the shape
   * @param {ShapeStyle} style - appearance of the shape
   */
  constructor(
      private radius: number = 1, coordinates: Coordinates2D = {xPosition: 0, yPosition: 0},
      style: ShapeStyle = {fillColor: '', strokeColor: '', strokeWidth: 2}) {
    super(coordinates, style);
    this.centroid = this.coordinates;
  }

  /**
   * Calculates the area of the circle
   * @returns PI * r^2
   */
  public getArea(): number {
    return this.radius * this.radius * Math.PI;
  }

  /**
   * Draw the circle to screen
   */
  public draw(renderingContext: CanvasRenderingContext2D): void {
    // saves the current styles set elsewhere to avoid overwriting them
    renderingContext.save();

    // set the styles for this shape
    renderingContext.fillStyle = this.style.fillColor;
    renderingContext.lineWidth = this.style.strokeWidth;

    // create the *path*
    renderingContext.beginPath();
    renderingContext.strokeStyle = this.style.strokeColor;
    renderingContext.arc(this.coordinates.xPosition, this.coordinates.yPosition, this.radius, 0, 2 * Math.PI);

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
  public getCentroid(): Coordinates2D {
    return this.centroid;
  }
}
