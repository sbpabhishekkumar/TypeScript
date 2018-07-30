var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
new Animal("Cat").name; // Error: 'name' is private;
console.log(Animal);
