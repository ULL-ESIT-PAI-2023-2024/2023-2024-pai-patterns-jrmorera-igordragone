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

/// SUV interface 
interface SUV {
  getHorsepower(): number;
}

/// Sedan interface
interface Sedan {
  getCargo(): number;
}

/// PeugeotSUV class. An implementation of SUV.
class PeugeotSUV implements SUV {
  /// Get the engine power
  public getHorsepower(): number {
    return 120;
  }
}

/// PeugeotSedan class. An implementation of sedan.
class PeugeotSedan implements Sedan {
  /// Get the cargo capacity in liters
  public getCargo(): number {
    return 150;
  }
}

/// PorscheSUV class. An implementation of SUV.
class PorscheSUV implements SUV {
  /// Get the engine power
  public getHorsepower(): number {
    return 300;
  }
}

/// PorscheSedan class. An implementation of sedan.
class PorscheSedan implements Sedan {
  /// Get the cargo capacity in liters
  public getCargo(): number {
    return 100;
  }
}

/// Factory abstract class for SUV 
abstract class SUVFactory {
  public abstract createSUV(): SUV;
} 

/// Factory for Peugeot SUVs
class PeugeotSUVFactory extends SUVFactory {
  public createSUV(): SUV {
    console.log('Creating a Peugeot SUV');
    return new PeugeotSUV();
  }
}

/// Factory for Porsche SUVs
class PorscheSUVFactory extends SUVFactory {
  public createSUV(): SUV {
    console.log('Creating a Porsche SUV');
    return new PorscheSUV();
  }
}

/// Factory abstract class for Sedan
abstract class SedanFactory {
  public abstract createSedan(): Sedan;
}

/// Factory for Peugeot Sedan
class PeugeotSedanFactory extends SedanFactory {
  public createSedan(): Sedan {
    console.log('Creating a Peugeot Sedan');
    return new PeugeotSedan();
  }
}

/// Factory for Porsche Sedan
class PorscheSedanFactory extends SedanFactory {
  public createSedan(): Sedan {
    console.log('Creating a Porsche Sedan');
    return new PorscheSedan();
  }
}

/// Client code
export function main(): void {
  let firstCar = new PeugeotSUVFactory().createSUV();
  /** Imagine some other code */
  let secondCar = new PorscheSUVFactory().createSUV();
  // Oh no, we messed up and built the wrong car!
}

main();
