/** @classdesc A class to visualize shapes on a canvas */
export declare class View {
    private readonly randomShapeGenerator;
    private readonly canvas;
    private readonly renderingContext;
    /**
     * Buils a view object for a canvas
     * @param canvas the element where figures will be drawn
     */
    constructor();
    drawRandomCircle(): void;
    drawRandomRectangle(): void;
    drawRandomTriangle(): void;
    clear(): void;
}
