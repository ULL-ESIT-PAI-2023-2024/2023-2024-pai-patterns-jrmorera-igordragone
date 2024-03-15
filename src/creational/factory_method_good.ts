/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file factory_method_good.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  14/03/2024
 * @brief Academic example to show an implementation of the factory method pattern.
 * @see {@link https://refactoring.guru/design-patterns/factory-method}
 */

/**
 * Burger interface. 
 */
interface Burger {
  prepare(): void;
  cook(): void;
  box(): void;
}

/**
 * CheeseBurger class. An implementation of burger.
 */
class CheeseBurger implements Burger {
  /**
   * Prepares the burger.
   */
  public prepare(): void {
    console.log('Preparing the Cheese Burger');
  }

  /**
   * Cooks the burger.
   */
  public cook(): void {
    console.log('Cooking the Cheese Burger');
  }

  /**
   * Boxes the burger.
   */
  public box(): void {
    console.log('Boxing the Cheese Burger');
  }
}

/**
 * ChickenBurger class. An implementation of burger.
 */
class ChickenBurger implements Burger {
  /**
   * Prepares the burger.
   */
  public prepare(): void {
    console.log('Preparing the Chicken Burger');
  }

  /**
   * Cooks the burger.
   */
  public cook(): void {
    console.log('Cooking the Chicken Burger');
  }

  /**
   * Boxes the burger.
   */
  public box(): void {
    console.log('Boxing the Chicken Burger');
  }
}

/**
 * BigMac class. An implementation of burger.
 */
class BigMac implements Burger {
  /**
   * Prepares the burger.
   */
  public prepare(): void {
    console.log('Preparing the BigMac Burger');
  }

  /**
   * Cooks the burger.
   */
  public cook(): void {
    console.log('Cooking the BigMac Burger');
  }

  /**
   * Boxes the burger.
   */
  public box(): void {
    console.log('Boxing the BigMac Burger');
  }
}

/**
 * Shop that provides burgers.
 */
abstract class BurgerStore {
  /**
   * Creates a burger.
   * @param type The type of burger to create.
   * @returns The created burger.
   */
  public orderBurger(type: string): Burger {
    let burger = this.createBurger(type);

    burger.prepare();
    burger.cook();
    burger.box();
    return burger;
  }

  /**
   * Factory method Creates a burger.
   * @param type The type of burger to create.
   * @returns The created burger.
   */
  protected abstract createBurger(type: string): Burger;
}

/**
 * An implementation of a burguer store
 */
class DeburgerKing extends BurgerStore {
  protected createBurger(type: string): Burger {
    if (type === 'cheese') {
      return new CheeseBurger();
    } else if (type === 'chicken') {
      return new ChickenBurger();
    }
    throw new Error('Invalid burger type');
  }
}

/**
 * An implementation of a burguer store
 */
class McDonalds extends BurgerStore {
  protected createBurger(type: string): Burger {
    if (type === 'bigmac') {
      return new BigMac();
    } else if (type === 'chicken') {
      return new ChickenBurger();
    }
    throw new Error('Invalid burger type');
  }
}

/**
 * Client code
 */
export function main(): void {
  let firstFranchise: BurgerStore = new DeburgerKing();
  let firstBurger: Burger = firstFranchise.orderBurger('cheese');

  console.log('\nGoing to another restaurant...\n')

  let secondFranchise: BurgerStore = new McDonalds();
  let secondBurger: Burger = secondFranchise.orderBurger('bigmac');
}

main();
