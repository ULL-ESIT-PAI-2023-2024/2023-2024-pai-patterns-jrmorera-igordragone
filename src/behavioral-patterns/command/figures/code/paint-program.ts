/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Program for drawing shapes of random properties in a canvas
 */
import {RandomShapeGenerator} from './auxiliar/random_shapes_generator.js';
import {View} from './auxiliar/view.js';

export class PaintProgram {
  
  constructor(
      private readonly VIEW: View = new View(),
      private readonly GENERATOR: RandomShapeGenerator = new RandomShapeGenerator(VIEW.getCanvas())) {}

  public drawCircle(): void {
    this.VIEW.drawShape(this.GENERATOR.getRandomCircle());
  }
  public drawRectangle(): void {
    this.VIEW.drawShape(this.GENERATOR.getRandomRectangle());
  }
  public drawTriangle(): void {
    this.VIEW.drawShape(this.GENERATOR.getRandomTriangle());
  }

  public undo(): void {
    for each
  }
}
