const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./shapes");
const Svg = require('./svg');
const fs = require('fs');

class Cli {

    writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            err ? console.log(err) : console.log("SVG generated successfully");

        });
    }

    run() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "text",
                    message: "Enter a text for the logo (up to 3 characters)",
                },
                {
                    type: "input",
                    name: "text_color",
                    message: "Enter a text color",
                },
                {
                    type: "list",
                    name: "shape",
                    message: "Select a shape for the logo",
                    choices: ["Circle", "Square", "Triangle"]
                },
                {
                    type: "input",
                    name: "shape_color",
                    message: "Enter a shape color"
                }
            ]).then(({ text, text_color, shape, shape_color }) => {
                let svg;
                if (text.length > 3) {
                    console.log('Text must be 3 characters long !');
                    return;
                }
                let shapeInput;
                switch (shape) {
                    case 'Circle':
                        shapeInput = new Circle(shape_color);
                        break;
                    case 'Square':
                        shapeInput = new Square(shape_color);
                        break;
                    case 'Triangle':
                        shapeInput = new Triangle(shape_color);
                        break;

                    default:
                        console.log("Invalid Shape");
                        break;
                }
                svg = new Svg(shapeInput, text, text_color);
                this.writeToFile('logo.svg', svg.render())
            }).catch((error) => {
                console.log(error);
            });
    }
};


module.exports = Cli;