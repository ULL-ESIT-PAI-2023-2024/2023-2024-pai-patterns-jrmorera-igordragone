/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file bridge_bad.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Academic example to show the need of the bridge pattern.
 * @see {@link https://refactoring.guru/design-patterns/bridge}
 * @see {@link https://dofactory.com/net/bridge-design-pattern}
 */

/** Represents a pizza **/
abstract class Pizza {
  /**
   * Creates a pizza object
   * @param price the cost
   * @param topping possible extras (extra cheese, bacon, etc.)
   */
  constructor(protected price: number, protected topping: string) {}
  /// Prepares the pizza
  public abstract assemble(): void;

  /**
   * Gets the price of the pizza.
   * @returns The price of the pizza.
   */
  public getPrice(): number {
    return this.price;
  }
}

/**
 * Represents a Pepperoni Pizza.
 * @extends Pizza
 */
class PepperoniPizza extends Pizza {
  constructor(price: number, topping: string) {
    super(price, topping);
  }

  /// Assembles the Pepperoni Pizza.
  public assemble(): void {
    console.log('Preparing dough');
    console.log(`Adding toppings: ${this.topping}`);
    console.log('Adding Pepperoni');
    console.log('Baking the pizza');
  }
}

/**
 * Represents a Hawaiian pizza.
 * @extends Pizza
 */
class HawaiianPizza extends Pizza {
  constructor(price: number, topping: string) {
    super(price, topping);
  }

  /// Assembles the Hawaiian pizza.
  public assemble(): void {
    console.log('Preparing dough');
    console.log(`Adding toppings: ${this.topping}`);
    console.log('Adding Pineapple');
    console.log('Baking the pizza');
  }
}

/**
 * Represents a Pepperoni Calzone pizza.
 * @extends Pizza
 */
class PepperoniCalzone extends Pizza {
  /**
   * Creates a new instance of PepperoniCalzone.
   * @param price - The price of the pizza.
   * @param topping - The topping of the pizza.
   */
  constructor(price: number, topping: string) {
    super(price, topping);
  }

  /// Assembles the Pepperoni Calzone pizza.
  public assemble(): void {
    console.log('Preparing dough');
    console.log(`Adding toppings: ${this.topping}`);
    console.log('Adding Pepperoni');
    console.log('Folding in half');
    console.log('Baking the calzone');
  }
}

/**
 * Represents a Hawaiian Calzone pizza.
 * @extends Pizza
 */
class HawaiianCalzone extends Pizza {
  constructor(price: number, topping: string) {
    super(price, topping);
  }

  /**
   * Assembles the Hawaiian Calzone pizza.
   * This method prepares the dough, adds toppings, adds pineapple, folds it in half, and bakes the calzone.
   */
  public assemble(): void {
    console.log('Preparing dough');
    console.log(`Adding toppings: ${this.topping}`);
    console.log('Adding Pineapple');
    console.log('Folding in half');
    console.log('Baking the calzone');
  }
}
