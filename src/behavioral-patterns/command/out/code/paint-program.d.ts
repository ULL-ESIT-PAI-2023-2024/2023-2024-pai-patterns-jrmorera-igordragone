import { PaintCommand } from './command-client.js';
export declare class PaintProgram {
    private commands;
    private readonly VIEW;
    constructor();
    execute(command: PaintCommand): void;
    /**
     * Reverse the effects of the last command executed.
     * As we are working with a canvas, it has to be completely erased and all previous actions redone.
     */
    undo(): void;
}
