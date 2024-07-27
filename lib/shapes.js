class Shape {

    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="100" height="100"" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon height="100" width="100" points="0,200 300,200 150,0" fill="${this.color}" />`
    }
};

module.exports = { Circle, Square, Triangle }