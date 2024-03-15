/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file strategy_good.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Explicative implementation of strategy pattern.
 *        Strategy is a behavioral design pattern.
 * @see {@link https://refactoring.guru/design-patterns/strategy}
 * @see {@link https://dofactory.com/net/strategy-design-pattern}
 */

/**
 * The Context defines the interface of interest to clients.
 */
class View {
  /// Usually, the Context accepts a strategy through the constructor.
  constructor(private shape: Shape) {}

  /// Usually, the Context allows replacing a Strategy object at runtime.
  public setShape(shape: Shape) {
    this.shape = shape;
  }

  /**
   * The Context delegates some work to the Strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  public drawShapes(): void {
    console.log('Context: Drawings shapes (not sure how it will do it)');
    this.shape.draw();
  }
}

/**
 * Strategy interface. The Shape interface declares operations common to all supported versions of
 * some algorithm.
 */
interface Shape {
  draw(): void;
}

/**
 * Concrete Shape: Square
 */
class Square implements Shape {
  /// Draw a square
  public draw(): void {
    console.log('Drawing a square');
    /// Actual drawing code
  }
}

/// Concrete Shape: Circle
class Circle implements Shape {
  /// Draw a circle
  public draw(): void {
    console.log('Drawing a circle');
    /// Actual drawing code
  }
}

/// Concrete Shape: Triangle
class Triangle implements Shape {
  /// Draw a triangle
  public draw(): void {
    console.log('Drawing a triangle');
    /// Actual drawing code
  }
}

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
export function main() {
  const view = new View(new Circle());
  view.drawShapes();
  view.setShape(new Square());
  view.drawShapes();
  view.setShape(new Triangle());
  view.drawShapes();
  view.setShape(new Circle());
  view.drawShapes();
}

main();
