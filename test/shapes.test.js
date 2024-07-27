const { Circle, Square, Triangle } = require("../lib/shapes")

describe('Circle', () => {
    test('Should render circle with color passed in', () => {
        const circle = new Circle('green');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});

describe('Square', () => {
    test('Should render square with color passed in', () => {
        const square = new Square('black');
        expect(square.render()).toEqual('<rect width="100" height="100"" fill="black" />');
    });
});
describe('Triangle', () => {
    test('Should render triangle with color passed in', () => {
        const triangle = new Triangle('blue');
        expect(triangle.render()).toEqual('<polygon height="100" width="100" points="0,200 300,200 150,0" fill="blue" />');
    });
});
