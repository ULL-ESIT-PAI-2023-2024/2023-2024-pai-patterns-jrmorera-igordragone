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
 * @brief Explicative implementation of bridge pattern.
 *        Bridge is a structural design pattern.
 * @see {@link https://refactoring.guru/design-patterns/bridge}
 * @see {@link https://dofactory.com/net/bridge-design-pattern}
 */

/**
 * Represents a pizza.
 */
abstract class Pizza {
  /**
   * Creates a pizza object
   * @param price the cost
   * @param topping possible extras (extra cheese, bacon, etc.)
   */
  constructor(protected price: number, protected topping: string, protected flavor: Flavor) {}
  /// Prepares the pizza
  public abstract assemble(): void;

  /**
   * Gets the price of the pizza.
   * @returns The price of the pizza.
   */
  public getPrice(): number {
    return this.price + this.flavor.getPrice();
  }
}

/**
 * Represents a pizza.
 */
abstract class Flavor {
  constructor(protected price: number) {}

  /// Prepares the ingredients for the flavor
  public abstract prepare(): void;

  /**
   * Gets the price of the flavor.
   * @returns The price of the flavor.
   */
  public getPrice(): number {
    return this.price;
  }
}

/**
 * Represents a Pepperoni Flavor.
 * @extends Flavor
 */
class Pepperoni extends Flavor {
  constructor(price: number) {
    super(price);
  }

  /// Prepares the ingredients for the flavor
  public prepare(): void {
    console.log('Add pepperoni');
  }
}

/**
 * Represents a Hawaiian Flavor.
 * @extends Flavor
 */
class Hawaiian extends Flavor {
  constructor(price: number) {
    super(price);
  }

  /// Prepares the ingredients for the flavor
  public prepare(): void {
    console.log('Add Pineapple');
  }
}

/**
 * Represents a Pepperoni Calzone pizza.
 * @extends Pizza
 */
class RegularPizza extends Pizza {
  /**
   * Creates a new instance of PepperoniCalzone.
   * @param price - The price of the pizza.
   * @param topping - The topping of the pizza.
   */
  constructor(price: number, topping: string, flavor: Flavor) {
    super(price, topping, flavor);
  }

  /**
   * Assembles the Pepperoni Calzone pizza.
   */
  public assemble(): void {
    console.log('Preparing dough');
    console.log(`Adding toppings: ${this.topping}`);
    this.flavor.prepare();
    console.log('Baking the pizza');
  }
}

/**
 * Represents a Pepperoni Calzone pizza.
 * @extends Pizza
 */
class Calzone extends Pizza {
  /**
   * Creates a new instance of PepperoniCalzone.
   * @param price - The price of the pizza.
   * @param topping - The topping of the pizza.
   */
  constructor(price: number, topping: string, flavor: Flavor) {
    super(price, topping, flavor);
  }

  /**
   * Assembles the Pepperoni Calzone pizza.
   */
  public assemble(): void {
    console.log('Preparing dough');
    console.log(`Adding toppings: ${this.topping}`);
    this.flavor.prepare();
    console.log('Folding in half');
    console.log('Baking the calzone');
  }
}

// Usage example
export function main(): void {
  console.log('\nCreating first pizza...');
  let firstPizza: Pizza = new RegularPizza(10, 'Extra cheese', new Pepperoni(2));
  firstPizza.assemble();
  console.log('\nCreating second pizza...');
  let secondPizza: Pizza = new Calzone(15, 'Extra cheese', new Hawaiian(3));
  secondPizza.assemble();
}

if (require.main === module) {
  main();
}
