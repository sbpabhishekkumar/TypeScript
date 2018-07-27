function f(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f(false, 0); // returns '0'
f(true, 0); // returns '100'
console.log(f);
