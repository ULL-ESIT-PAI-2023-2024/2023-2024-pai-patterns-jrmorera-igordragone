/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file template_good.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Explicative implementation of template pattern.
 *        Templaye is a behavioral design pattern.
 * @see {@link https://refactoring.guru/design-patterns/template}
 * @see {@link https://dofactory.com/net/template-design-pattern}
 */

/**
 * The Abstract Class defines a template method that contains a skeleton of some
 * algorithm.
 *
 * Concrete subclasses should implement these operations, but leave the template
 * method itself intact.
 *
 * In this example, the AbstractClass defines the
 * algorithm for preparing a cocktail. The algorithm is the same for all cocktails
 */
abstract class Cocktail {
  /// The template method defines the skeleton of an algorithm.
  public prepare(): void {
    this.addGlass();
    this.addIce();
    this.addAlcohol();
    this.addFruit();
    this.addExtra();
    this.stir();
    this.addStraw();
  }

  /// These operations already have implementations.
  protected addGlass(): void {
    console.log('Adding a glass');
  }

  protected addIce(): void {
    console.log('Adding ice');
  }

  protected stir(): void {
    console.log('Stirring');
  }

  protected addStraw(): void {
    console.log('Adding a straw');
  }

  /**
   * These operations have to be implemented in subclasses.
   */
  protected abstract addAlcohol(): void;
  protected abstract addFruit(): void;
  protected abstract addExtra(): void;
}

/**
 * Concrete classes have to implement all abstract operations of the base class.
 * They can also override some operations with a default implementation.
 * In this example, the ConcreteClass is a Caipirinha.
 */
class Caipirinha extends Cocktail {
  /// Here we override the addAlcohol
  protected addAlcohol(): void {
    console.log('Adding cachaca');
  }

  /// Here we override the addFruit
  protected addFruit(): void {
    console.log('Adding lime');
  }

  /// Here we override the addExtra
  protected addExtra(): void {
    console.log('Adding sugar');
  }
}

export function main() {
  let caipirinha = new Caipirinha();
  let mojito = new Mojito();

  console.log('Preparing a caipirinha:');
  caipirinha.prepare();

  console.log('\nPreparing a mojito:');
  mojito.prepare();
}

main();
