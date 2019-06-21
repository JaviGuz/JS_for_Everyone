/*var i = "global";

function foo() {
    var i = "local"; // Otra variable local solo para esta función
    console.log(i); // local
}
foo();
console.log(i); // global
*/

//Function expression
var functionOne = function (num) {
    console.log("function expression!");
    return num * 2;
};

console.log(functionOne(3));

//Function declaration

console.log(functionTwo(3));

function functionTwo(num) {
    console.log("function declaration!");
    return num * 2;
}

// Arrow Function
var functionArr = (num) => {
    console.log("function arrow!");
    return num * 2;
}

console.log(functionArr(3));