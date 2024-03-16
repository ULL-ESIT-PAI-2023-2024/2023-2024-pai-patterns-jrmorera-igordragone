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
import {PaintProgram} from "./paint-program.js";

const main = function(): void {
  // Get references to the buttons
  const CIRCLE_BUTTON = document.getElementById('circle');
  const RECTANGLE_BUTTON = document.getElementById('rectangle');
  const TRIANGLE_BUTTON = document.getElementById('triangle');
  const UNDO_BUTTON = document.getElementById('undo');

  /// Create the painter program
  let painter = new PaintProgram();

  // Add event listeners to the buttons
  CIRCLE_BUTTON!.addEventListener('click', function() {
    painter.drawCircle();
  });

  RECTANGLE_BUTTON!.addEventListener('click', function() {
    painter.drawRectangle();
  });

  TRIANGLE_BUTTON!.addEventListener('click', function() {
    painter.drawTriangle();
  });

  UNDO_BUTTON!.addEventListener('click', function() {
    painter.undo();
  });
};

main();
