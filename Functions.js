// Arrow Functions & Higher Order Functions.
const calculate = (a, b, operation) => {
    return operation(a, b);
}

const subtraction = (a, b) => {
    return a-b;
}

const subtractionResult = calculate(11, 9, subtraction);
console.log("subtractionResult: " +subtractionResult);

// Higher Order Functions.
function fetchData(callback) {
    setTimeout(() => {
        let data = "Fetched Data!";
        callback(data, null);
    }, 3000);
};

function handleData(data, error) {
    if(error) {
        console.error(error);
    } else {
        console.log(data);
    }
}

console.log('Start...');
fetchData(handleData);
// console.log('Stop!');
