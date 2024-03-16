import { View } from "./auxiliar/view.js";
export declare abstract class PaintCommand {
    abstract execute(currentPainting: View): void;
}
