/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file command-client.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  16/03/2024
 * @brief Explicative implementation of command pattern.
 *        Command is a behavioral design pattern.
 * @see {@link https://refactoring.guru/design-patterns/command}
 * @see {@link https://www.patterns.dev/vanilla/command-pattern}
 */
import {PaintProgram} from "./paint-program.js";
import {View} from "./auxiliar/view.js";

/// Abstract class that represents an operation petition for the painter app
export abstract class PaintCommand {
  /// Applies the effects of the command
  abstract execute(currentPainting: View): void;
}

/// Command for creating a circle
class DrawCircleCommand extends PaintCommand {
  execute(currentPainting: View): void {
    currentPainting.drawRandomCircle();
  }
}

/// Command for creating a rectangle
class DrawRectangleCommand extends PaintCommand {
  execute(currentPainting: View): void {
    currentPainting.drawRandomRectangle();
  }
}

/// Command for creating a triangle
class DrawTriangleCommand extends PaintCommand {
  execute(currentPainting: View): void {
    currentPainting.drawRandomTriangle();
  }
}

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
    painter.execute(new DrawCircleCommand());
  });

  RECTANGLE_BUTTON!.addEventListener('click', function() {
    painter.execute(new DrawRectangleCommand());
  });

  TRIANGLE_BUTTON!.addEventListener('click', function() {
    painter.execute(new DrawTriangleCommand());
  });

  UNDO_BUTTON!.addEventListener('click', function() {
    painter.undo();
  });
};

main();
