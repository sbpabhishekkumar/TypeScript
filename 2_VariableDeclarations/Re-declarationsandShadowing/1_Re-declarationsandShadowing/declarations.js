function f(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(f(false, 0)); // returns '0'
console.log(f(true, 0)); // returns '100'
//console.log(f.condition, f.x)
