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

/// Abstract factory interface.
interface CarFactory {
  createSedan(): Sedan;
  createSUV(): SUV;
}

/// PeugeotCarFactory class. An implementation of carFactory.
class PeugeotCarFactory implements CarFactory {
  /// Create a Peugeot SUV
  public createSUV(): SUV {
    console.log('Creating a Peugeot SUV');
    return new PeugeotSUV();
  }

  /// Create Peugeot Sedan
  public createSedan(): Sedan {
    console.log('Creating a Peugeot Sedan');
    return new PeugeotSedan();
  }
}

/// PorscheCarFactory class. An implementation of carFactory.
class PorscheCarFactory implements CarFactory {
  /// Create a Porsche SUV
  public createSUV(): SUV {
    console.log('Creating a Porsche SUV');
    return new PorscheSUV();
  }

  /// Create Porsche Sedan
  public createSedan(): Sedan {
    console.log('Creating a Porsche Sedan');
    return new PorscheSedan();
  }
}

/// Client code
export function main(): void {
  let currentCarFactory: PeugeotCarFactory = new PeugeotCarFactory();
  let mySUV: SUV = currentCarFactory.createSUV();
  let mySedan: Sedan = currentCarFactory.createSedan();

  // Now we have matching cars!
}

main();
