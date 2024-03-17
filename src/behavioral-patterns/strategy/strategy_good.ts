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
  /**
   * Usually, the Context accepts a strategy through the constructor.
   */
  constructor(private drawingStrategy: ShapeDrawingStrategy) {}

  /**
   * Usually, the Context allows replacing a Strategy object at runtime.
   */
  public setShape(drawingStrategy: ShapeDrawingStrategy) {
    this.drawingStrategy = drawingStrategy;
  }

  /**
   * The Context delegates some work to the Strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  public drawShapes(): void {
    console.log('Context: Drawings shapes (not sure how it will do it)');
    this.drawingStrategy.draw();
  }
}

/**
 * Strategy interface. The Shape interface declares operations common to all supported versions of
 * some algorithm.
 */
interface ShapeDrawingStrategy {
  draw(): void;
}

/**
 * Concrete Shape: Square
 */
class SquareDrawingStrategy implements ShapeDrawingStrategy {
  /**
   * Draw a square
   */
  public draw(): void {
    console.log('Drawing a square');
    // Draw a square
  }
}

/**
 * Concrete Shape: Circle
 */
class CircleDrawingStrategy implements ShapeDrawingStrategy {
  /**
   * Draw a circle
   */
  public draw(): void {
    console.log('Drawing a circle');
    // Draw a circle
  }
}
/**
 * Concrete Shape: Triangle
 */
class TriangleDrawingStrategy implements ShapeDrawingStrategy {
  /**
   * Draw a triangle
   */
  public draw(): void {
    console.log('Drawing a triangle');
    // Draw a triangle
  }
}

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
export function main() {
  const view = new View(new CircleDrawingStrategy());
  view.drawShapes();
  view.setShape(new SquareDrawingStrategy());
  view.drawShapes();
  view.setShape(new TriangleDrawingStrategy());
  view.drawShapes();
};

main();

