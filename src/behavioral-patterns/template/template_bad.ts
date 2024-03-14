/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file template_bad.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  12/03/2024
 * @brief Academic example to show the need of the template pattern.
 * @see {@link https://refactoring.guru/design-patterns/template}
 * @see {@link https://dofactory.com/net/template-design-pattern}
 */


/**
 * Class that represents the cocktail named Caipirinha. It has a method to prepare it.
 */
class Caipirinha {
  public prepare(): void {
    console.log('Take a glass')
    console.log('Add ice')
    console.log('Add sugar')
    console.log('Add lime')
    console.log('Add cachaca')
    console.log('Stir')
    console.log('Add a straw')
  }
}

/**
 * Class that represents the cocktail named Mojito. It has a method to prepare it.
 */
class Mojito {
  public prepare(): void {
    console.log('Take a glass')
    console.log('Add ice')
    console.log('Add sugar')
    console.log('Add lime')
    console.log('Add rum')
    console.log('Add mint')
    console.log('Stir')
    console.log('Add a straw')
  }
}