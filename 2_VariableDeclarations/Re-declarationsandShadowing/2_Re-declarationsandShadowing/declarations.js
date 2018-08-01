function f(x) {
    var x = 100;
    // error: interferes with parameter declaration 
}
function g() {
    var x = 100;
    var x = 100;
    //error: can't have both declarations of 'x' 
}
console.log(f);
