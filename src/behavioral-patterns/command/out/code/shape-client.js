/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author José Ramón Morera Campos <alu0101471846@ull.edu.es>
 * @since Mar 11 2024
 * @desc  Program for drawing shapes of random properties in a canvas
 */
import { RandomShapeGenerator } from './shapes/random_shapes_generator.js';
import { View } from './view.js';
const main = function () {
    let canvas = document.createElement('CANVAS');
    const MARGIN = 120; // Padding of the canvas
    canvas.width = window.innerWidth - MARGIN;
    canvas.height = window.innerHeight - MARGIN;
    canvas.style.border = '3px solid black';
    document.body.appendChild(canvas); // Add canvas as child of the document
    let generator = new RandomShapeGenerator(canvas);
    let view = new View(canvas);
    let circle = generator.getRandomCircle();
    view.drawAllInformaton(circle);
    let square = generator.getRandomSquare();
    view.drawAllInformaton(square);
    let triangle = generator.getRandomTriangle();
    view.drawAllInformaton(triangle);
    let rectangle = generator.getRandomRectangle();
    view.drawAllInformaton(rectangle);
    let firstSegment = generator.getRandomSegment();
    view.drawAllInformaton(firstSegment);
    let secondSegment = generator.getRandomSegment();
    view.drawAllInformaton(secondSegment);
    let thirdSegment = generator.getRandomSegment();
    view.drawAllInformaton(thirdSegment);
    let fourthSegment = generator.getRandomSegment();
    view.drawAllInformaton(fourthSegment);
};
main();
//# sourceMappingURL=shape-client.js.map