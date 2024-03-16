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
 * @brief View class for rendering 2D figures
 */
import { RandomShapeGenerator } from './random_shapes_generator.js';

/** @classdesc A class to visualize shapes on a canvas */
export class View {
  private readonly randomShapeGenerator: RandomShapeGenerator;
  private readonly canvas: HTMLCanvasElement;
  private readonly renderingContext: CanvasRenderingContext2D;
  /**
   * Buils a view object for a canvas
   * @param canvas the element where figures will be drawn
   */
  constructor() {
    this.canvas = document.createElement('CANVAS') as HTMLCanvasElement;
    const MARGIN = 150;  // Padding of the canvas
    this.canvas.width = window.innerWidth - MARGIN;
    this.canvas.height = window.innerHeight - MARGIN;
    this.canvas.style.border = '3px solid black';
    document.body.appendChild(this.canvas);  // Add canvas as child of the document
    this.renderingContext = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.randomShapeGenerator = new RandomShapeGenerator(this.canvas);
  }

  /// Display a circle of random properties in the canvas
  public drawRandomCircle() {
    this.randomShapeGenerator.getRandomCircle().draw(this.renderingContext);
  }

  /// Display a rectangle of random properties in the canvas
  public drawRandomRectangle() {
    this.randomShapeGenerator.getRandomRectangle().draw(this.renderingContext);
  }

   /// Display a triangle of random properties in the canvas 
  public drawRandomTriangle() {
    this.randomShapeGenerator.getRandomTriangle().draw(this.renderingContext);
  }

  /// Erases the view contents
  public clear(): void {
    this.renderingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.randomShapeGenerator.resetRandom();
  }
}
