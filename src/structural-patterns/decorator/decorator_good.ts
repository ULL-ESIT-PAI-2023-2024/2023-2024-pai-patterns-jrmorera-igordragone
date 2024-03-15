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
 * @brief Explicative implementation of decorator pattern.
 *        Decorator is a structural design pattern.
 * @see {@link https://refactoring.guru/design-patterns/bridge}
 * @see {@link https://dofactory.com/net/bridge-design-pattern}
 */

// Enemy Interface. Defines operations that can be altered by decorators.
interface Enemy {
  attack(): void;
}
;

// Concrete enemy. It provides a default implementation for the operations.
class Troll implements Enemy {
  // Attacks the player.
  public attack(): void {
    console.log('Troll attacks');
  }
}

/**
 * Base decorator class. It maintains a reference to a component object and
 * defines an interface that conforms to the component's interface.
 */
abstract class EnemyDecorator implements Enemy {
  constructor(protected enemy: Enemy) {}

  // The decorator delegates all work to the wrapped component.
  public attack(): void {
    this.enemy.attack();
  }
};

// Concrete decorator. It adds new responsibilities to the component.
class Sword extends EnemyDecorator {
  // Adds a sword to the enemy.
  public attack(): void {
    super.attack();
    console.log(' with a sword!');
  }
};

// Concrete decorator. It adds new responsibilities to the component.
class Gun extends EnemyDecorator {
  // Adds a gun to the enemy.
  public attack(): void {
    super.attack();
    console.log(' with a gun!');
  }
};
// Client code
export function main() {
  const troll: Enemy = new Troll();
  troll.attack();

  const trollWithSword: Enemy = new Sword(troll);
  trollWithSword.attack();

  const trollWithSwordAndGun: Enemy = new Gun(trollWithSword);
  trollWithSwordAndGun.attack();
}

main();