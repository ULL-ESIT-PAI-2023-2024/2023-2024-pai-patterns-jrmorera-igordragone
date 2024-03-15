/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file strategy_bad.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Academic example to show the need of the strategy pattern.
 * @see {@link https://refactoring.guru/design-patterns/strategy}
 * @see {@link https://dofactory.com/net/strategy-design-pattern}
 */

/**
 * The View class is a simple class that draws shapes. It has a method to draw
 * the shape and a method to set the shape to draw.
 */
class View {
  /* The shape to draw */
  private shape: Shape = Shape.CIRCLE;

  /**
   * The drawShape method is a simple method that draws a shape. It has a lot of
   * if-else statements to check which shape to draw(Code smell).
   */
  drawShape() {
    switch (this.shape) {
      case Shape.CIRCLE:
        console.log('Drawing a circle');
        // Draw a circle
        break;
      case Shape.SQUARE:
        console.log('Drawing a square');
        // Draw a square
        break;
      case Shape.TRIANGLE:
        console.log('Drawing a triangle');
        // Draw a triangle
        break;
      case Shape.RECTANGLE:
        console.log('Drawing a rectangle');
        // Draw a rectangle
        break;
      default:
        throw new Error('Invalid shape');
    }
  }

  /**
   * Set the shape to draw
   * @param shape shape chosen by the user
   */
  setShape(shape: Shape) {
    this.shape = shape;
  }
}

enum Shape {
  CIRCLE,
  SQUARE,
  TRIANGLE,
  RECTANGLE
}