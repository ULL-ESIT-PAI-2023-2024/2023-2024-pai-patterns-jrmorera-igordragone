/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file abstract_factory_good.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  14/03/2024
 * @brief Academic example to show an implementation of the abstract factory pattern.
 * @see {@link https://dofactory.com/net/abstract-factory-design-pattern}
 * @see {@link https://www.youtube.com/watch?v=CVlpjFJN17U}
 */

/**
 * Sofa interface. 
 */
interface Sofa {
  getNumberOfSeats(): number;
}

/**
 * Table interface. 
 */
interface Table {
  getSurface(): number;
}

/**
 * ModernSofa class. An implementation of sofa.
 */
class ModernSofa implements Sofa {
  /**
   * Returns the number of seats of the sofa.
   */
  public getNumberOfSeats(): number {
    return 3;
  }
}

/**
 * ModernTable class. An implementation of table.
 */
class ModernTable implements Table {
  /**
   * Returns the surface of the table.
   */
  public getSurface(): number {
    return 1.5;
  }
}

/**
 * VictorianSofa class. An implementation of sofa.
 */
class VictorianSofa implements Sofa {
  /**
   * Returns the number of seats of the sofa.
   */
  public getNumberOfSeats(): number {
    return 4;
  }
}

/**
 * VictorianTable class. An implementation of table.
 */
class VictorianTable implements Table {
  /**
   * Returns the surface of the table.
   */
  public getSurface(): number {
    return 2;
  }
}

/**
 * Abstract factory interface.
 */
interface FurnitureFactory {
  createSofa(): Sofa;
  createTable(): Table;
}

/**
 * ModernFurnitureFactory class. An implementation of furniture factory.
 */
class ModernFurnitureFactory implements FurnitureFactory {
  /**
   * Creates a modern sofa.
   */
  public createSofa(): Sofa {
    console.log('Creating a modern sofa');
    return new ModernSofa();
  }

  /**
   * Creates a modern table.
   */
  public createTable(): Table {
    console.log('Creating a modern table');
    return new ModernTable();
  }
}

/**
 * VictorianFurnitureFactory class. An implementation of furniture factory.
 */
class VictorianFurnitureFactory implements FurnitureFactory {
  /**
   * Creates a victorian sofa.
   */
  public createSofa(): Sofa {
    console.log('Creating a victorian sofa');
    return new VictorianSofa();
  }

  /**
   * Creates a victorian table.
   */
  public createTable(): Table {
    console.log('Creating a victorian table');
    return new VictorianTable();
  }
}

/**
 * Client code.
 */
export function main(): void {
  let currentFurnitureFactory: FurnitureFactory = new ModernFurnitureFactory();
  let modernSofa: Sofa = currentFurnitureFactory.createSofa();
  let modernTable: Table = currentFurnitureFactory.createTable();

  // Now we have matching furniture!
}

main();
