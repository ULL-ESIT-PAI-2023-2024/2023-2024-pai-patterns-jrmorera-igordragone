/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  View class for rendering 2d figures
 */
import {Shape} from './shape.js';

/** @classdesc A class to visualize shapes on a canvas */
export class View {
  private readonly canvas: HTMLCanvasElement;
  private readonly renderingContext: CanvasRenderingContext2D;
  /**
   * Buils a view object for a canvas
   * @param canvas the element where figures will be drawn
   */
  constructor() {
    this.canvas = document.createElement('CANVAS') as HTMLCanvasElement;
    const MARGIN = 120;  // Padding of the canvas
    this.canvas.width = window.innerWidth - MARGIN;
    this.canvas.height = window.innerHeight - MARGIN;
    this.canvas.style.border = '3px solid black';
    document.body.appendChild(this.canvas);  // Add canvas as child of the document
    this.renderingContext = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  /// Gettter for the canvas
  public getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * Draws a shape on the canvas
   * @param shape the shape to be drawn
   * @returns void
   */
  public drawShape(shape: Shape): void {
    shape.draw(this.renderingContext);
  }
}
