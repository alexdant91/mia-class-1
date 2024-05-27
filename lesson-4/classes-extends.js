class Calculator {
    constructor() {}

    squareArea = (l) => {
        return Math.pow(l, 2)
    }

    triangleArea = (b, h) => {
        return (b * h) / 2;
    }
}

class Square extends Calculator {
    constructor(l) {
        super();

        this.l = l;
    }

    calculateArea = () => {
        return this.squareArea(this.l);
    }
}

class Triangle extends Calculator {
    constructor(b, h) {
        super();

        this.b = b;
        this.h = h;
    }

    calculateArea = () => {
        return this.triangleArea(this.b, this.h);
    }
}

const square = new Square(12);

console.log(square.calculateArea());

const triangle = new Triangle(10, 24);

console.log(triangle.calculateArea());

class AreaError extends Error {
    constructor(message, code) {
        super(message);

        this.name = "AreaError";
        this.code = code;
    }
}

const err = new AreaError("Error during area calculation process", "E01003");

if (err.code === "E01003") {
    console.log(`There's an error code 'E01003', please check your data...
Original error: "${err.message}"`)
}