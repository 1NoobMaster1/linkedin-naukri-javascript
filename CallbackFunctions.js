const calculate = (a, b, operation) => {
    return operation(a, b);
}

const subtraction = (a, b) => {
    return a-b;
}

const subtractionResult = calculate(11, 9, subtraction);
console.log("subtractionResult: " +subtractionResult);
