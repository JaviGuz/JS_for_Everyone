let age = 35;
let gravity = 9.81;
let PI = 3.14;
let temperature = 37;
const boilingPoint = 100;
const bodyTemp = 37; 
console.log(age, gravity, PI, boilingPoint, bodyTemp);

//Two statements which provide truthy value
console.log(age > gravity);
console.log(temperature < (gravity * age));


//Operations that devolve boolean
console.log ("4 > 3 : ", 4 > 3);
console.log ("4 >= 3 : ", 4 >= 3);
console.log ("4 < 3 : ", 4 < 3);
console.log ("4 <= 3 : ", 4 <= 3);
console.log ("4 == 4 : ", 4 == 4);
console.log ("4 === 4 : ", 4 === 4);
console.log ("4 != 4 : ", 4 != 4);
console.log ("4 !== 4 : ", 4 !== 4);
console.log ("4 != '4' : ", 4 != '4');
console.log ("4 == '4' : ", 4 == '4');
console.log ("4 === '4' : ", 4 === '4');

let firstName;
console.log(firstName)

console.log(
    `The boiling point of water is ${boilingPoint} oC.\nHuman body temperatue is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);


const ampersand = 4 > 3 && 10 < 5; // AND Operator, true and false -> false
const pipe = 4 > 3 || 10 < 5; //OR Operator, true and false -> true
console.log('4 > 3 && 10 < 5 :', ampersand);
console.log('4 > 3 || 10 < 5 :', pipe);