/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * Design Patterns Presentation.
 * Programación de Interfaces Interactivas
 *
 * @file paint-program.ts
 * @author Igor Dragone <igor.dragone.13@ull.edu.es>
 * @author José Ramóon Morera Campos  <jose.morera.27@ull.edu.es>
 * @date  16/03/2024
 * @brief Explicative implementation of command pattern.
 *        This file contains a program for painting figures using commands.
 * @see {@link https://refactoring.guru/design-patterns/command}
 * @see {@link https://www.patterns.dev/vanilla/command-pattern}
 */
import { View } from './auxiliar/view.js';
export class PaintProgram {
    commands = [];
    VIEW = new View();
    constructor() { }
    execute(command) {
        command.execute(this.VIEW);
        this.commands.push(command);
    }
    /**
     * Reverse the effects of the last command executed.
     * As we are working with a canvas, it has to be completely erased and all previous actions redone.
     */
    undo() {
        this.commands.pop(); /// Remove last command
        this.VIEW.clear(); /// Reset view to original state
        /// Repeat the commands
        for (let currentComand of this.commands) {
            currentComand.execute(this.VIEW);
        }
    }
}
//# sourceMappingURL=paint-program.js.map