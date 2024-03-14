/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file decorator_bad.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Academic example to show the need of the decorator pattern.
 * @see {@link https://refactoring.guru/design-patterns/decorator}
 * @see {@link https://dofactory.com/net/decorator-design-pattern}
 */

/**
 * Represents an enemy.
 */
interface Enemy {
  attack(): void;
};

/**
 * Represents a Troll, a concrete enemy.
 */
class Troll implements Enemy {
  /**
   * Attacks the player.
   */
  public attack(): void {
    console.log('Troll attacks');
  }
};

/**
 * Represents a Troll with a sword.
 */
class TrollWithSword extends Troll {
  /**
   * Attacks the player with a sword.
   */
  public attack(): void {
    super.attack();
    console.log(' with a sword!');
  }
}

/**
 * Represents a Troll with a gun.
 */
class TrollWithGun extends Troll {
  /**
   * Attacks the player with a gun.
   */
  public attack(): void {
    super.attack();
    console.log(' with a gun!');
  }
}

/**
 * Represents a Troll with a sword and a gun.
 */
class TrollWithSwordAndGun extends Troll {
  /**
   * Attacks the player with a sword and a gun.
   */
  public attack(): void {
    super.attack();
    console.log(' with a sword and a gun!');
  }
}