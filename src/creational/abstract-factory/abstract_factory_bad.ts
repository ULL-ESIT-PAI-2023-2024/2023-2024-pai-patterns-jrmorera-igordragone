/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file abstract_factory_bad.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  14/03/2024
 * @brief Academic example to show the need of the abstract factory pattern.
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
 * Factory abstract class for Sofas
 */
abstract class SofaFactory {
  public abstract createSofa(): Sofa;
} 

/**
 * Factory for modern sofas
 */
class ModernSofaFactory extends SofaFactory {
  public createSofa(): Sofa {
    console.log('Creating a modern sofa');
    return new ModernSofa();
  }
}

/**
 * Factory for victorian sofas
 */
class VictorianSofaFactory extends SofaFactory {
  public createSofa(): Sofa {
    console.log('Creating a victorian sofa');
    return new VictorianSofa();
  }
}

/**
 * Factory abstract class for Tables
 */
abstract class TableFactory {
  public abstract createTable(): Table;
}

/**
 * Factory for modern tables
 */ 
class ModernTableFactory extends TableFactory {
  public createTable(): Table {
    console.log('Creating a modern table');
    return new ModernTable();
  }
}

/**
 * Factory for victorian tables
 */
class VictorianTableFactory extends TableFactory {
  public createTable(): Table {
    console.log('Creating a victorian table');
    return new VictorianTable();
  }
}

/**
 * Client code
 */
export function main(): void {
  let loungeTable = new ModernTableFactory().createTable();
  let loungeSofa = new VictorianSofaFactory().createSofa();
  // Oh no, we messed up and did not match funiture!
}

main();
