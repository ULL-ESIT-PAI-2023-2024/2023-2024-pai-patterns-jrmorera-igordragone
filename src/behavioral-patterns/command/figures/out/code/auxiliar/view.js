/** @classdesc A class to visualize shapes on a canvas */
export class View {
    canvas;
    renderingContext;
    /**
     * Buils a view object for a canvas
     * @param canvas the element where figures will be drawn
     */
    constructor() {
        this.canvas = document.createElement('CANVAS');
        const MARGIN = 120; // Padding of the canvas
        this.canvas.width = window.innerWidth - MARGIN;
        this.canvas.height = window.innerHeight - MARGIN;
        this.canvas.style.border = '3px solid black';
        document.body.appendChild(this.canvas); // Add canvas as child of the document
        this.renderingContext = this.canvas.getContext('2d');
    }
    /// Gettter for the canvas
    getCanvas() {
        return this.canvas;
    }
    /**
     * Draws a shape on the canvas
     * @param shape the shape to be drawn
     * @returns void
     */
    drawShape(shape) {
        shape.draw(this.renderingContext);
    }
}
//# sourceMappingURL=view.js.map