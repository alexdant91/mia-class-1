// class Calculator {
//     #AREA_CALCULATORS = {
//         square: (l) => {
//             this.result = Math.pow(l, 2);

//             this.historyShapes.at(-1).area = this.result;
//         },
//         rectangle: (b, h) => {
//             this.result = b * h;

//             this.historyShapes.at(-1).area = this.result;
//         },
//         triangle: (b, h) => {
//             this.result = (b * h) / 2;

//             this.historyShapes.at(-1).area = this.result;
//         }
//     };

//     #alias = null;

//     constructor(shape) {
//         this.result = null;
//         this.shape = shape;
//         this.historyShapes = [{ shape, area: null }];
//     }

//     static formatPrintString = (shape, result) => {
//         return `Area of ${shape} is ${result}`;
//     }

//     get shapeInfo() {
//         return [`Current shape is ${this.shape}`, this.historyShapes];
//     }

//     set alias(value) {
//         this.#alias = `Current operator is ${value} for shape ${this.shape}`;
//         return;
//     }

//     get alias() {
//         return this.#alias;
//     }

//     setShape = (shape) => {
//         this.shape = shape;
//         this.historyShapes.push({ shape, area: null });

//         return this;
//     }

//     area = (b, h) => {
//         this.#AREA_CALCULATORS[this.shape](b, h);

//         return this;
//     }

//     // #formatPrintString = () => {
//     //     return `Area of ${this.shape} is ${this.result}`;
//     // }
    
//     // formatPrintString = () => {
//     //     return `Area of ${this.shape} is ${this.result}`;
//     // }

//     printResult = () => {
//         // console.log(this.#formatPrintString());
//         // console.log(this.formatPrintString());
//         console.log(Calculator.formatPrintString(this.shape, this.result));

//         return this;
//     }
// }

// const calculator = new Calculator("square");

// calculator
//     .area(10)
//     .printResult()
//     .setShape("triangle")
//     .area(12, 22)
//     .printResult()
//     .setShape("rectangle")
//     .area(24, 68)
//     .printResult()


// const [info, history] = calculator.shapeInfo;

// console.log(info, history)

// calculator.alias = "Alessandro";

// console.log(calculator.alias)