function outer() {
    var a = 11;
    return function inner() {
        console.log(a);
    }
}

const func = outer();
func();
