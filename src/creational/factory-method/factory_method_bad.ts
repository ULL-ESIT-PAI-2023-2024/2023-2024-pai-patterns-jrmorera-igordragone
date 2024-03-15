/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file factory_method_bad.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  14/03/2024
 * @brief Academic example to show the need of the factory method pattern.
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
 * Shop that provides burgers.
 */
class BurgerStore {
  /**
   * Creates a burger.
   * @param type The type of burger to create.
   * @returns The created burger.
   */
  public orderBurger(type: string): Burger {
    let burger: Burger;
    if (type === 'cheese') {
      burger = new CheeseBurger();
    } else if (type === 'chicken') {
      burger = new ChickenBurger();
    } else {
      throw new Error('Unknown type of burger');
    }

    burger.prepare();
    burger.cook();
    burger.box();
    return burger;
  }
}
