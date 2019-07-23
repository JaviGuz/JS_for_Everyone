/* Course funcionality

// function without parameters
function addTwoNumbers() {
  var numOne = 10;
  var numTwo = 20;
  var sum = numOne + numTwo;
  console.log(sum);
}
addTwoNumbers(); // function has to be called to be executed
// Function without parameter doesn' take input, so lets make a parameter with parameter
function sumTwoNumbers(numOne, numTwo) {
  var sum = numOne + numTwo;
  console.log(sum);
}
sumTwoNumbers(10, 20); // calling functions
// If a function doesn't return it doesn't store data, so it should return
function sumTwoNumbersAndReturn(numOne, numTwo) {
  var sum = numOne + numTwo;
  return sum;
}
console.log(sumTwoNumbersAndReturn(10, 20));
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(printFullName("Asabeneh", "Yetayeh"));
console.log(printFullName("Dean", "Phan"));

function square(number) {
  return number * number;
}
console.log(square(10));

// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));

//
function sumOfEvensAndOdds() {
  var sumOfEvens = 0;
  var sumOfOdds = 0;
  for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      sumOfEvens = sumOfEvens + i;
      console.log('I am proudly even', i);
    } else {
      sumOfOdds = sumOfOdds + i;
      console.log('I am a proud odd number', i);
    }
  }
  return { evens: sumOfEvens, odds: sumOfOdds };
  //return [sumOfEvens, sumOfOdds];
  //return `The sum of all evens is ${sumOfEvens}. And the sum of all odds is ${sumOfOdds}`;
}

console.log(sumOfEvensAndOdds());  */

/******* Personal Code **********/

//Arrow function
const square = n => n * n;
console.log(square(10));

// Function expression
const sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 3));

// Exercise 1
function fullName() {
  const firstName = 'Javier';
  const lastName = 'Guzman Rosino';
  const fullName = firstName + ' ' + lastName;

  return fullName;
}
console.log(fullName());

// Exercise 2
function fullName2(firstName, lastName){
  var fullName = firstName + ' ' + lastName;
  console.log(fullName);
};
fullName2('Pepe', 'Villuela');

//Exercise 3
function addNumber(a, b){
  return a + b;
};
console.log(addNumber(4, 5));

// Exercise 4
function areaOfRectangle(length, width){
  let area = length * width;
  console.log(area);
};
console.log('Area del rectangulo: '); 
areaOfRectangle(3, 4);


// Exercise 5
function perimeterOfRectangle(length, width){
    let perimeter = 2*(length + width);
    return perimeter;
};
console.log('Perimetro del rectangulo: ',perimeterOfRectangle(2, 3));

// Exercise 6
function volumeOfRectPrism(lenght, width, height){
   let volume = lenght * width * height;
  return volume;
};
console.log('Volumen de un prisma rectangular: ', volumeOfRectPrism(2, 4, 2));

// Exercise 7
function areaOfCircle(radio){
  let area = Math.PI*radio*radio;
  return area;
};
console.log('Area de circulo: ', areaOfCircle(2));

//Exercise 8
function circumOfCircle(radio){
  let circumference = 2*Math.PI*radio;
  return circumference;
};
console.log("Circumference of a circle: ", circumOfCircle(3));

//Exercise 9
function densitySubstance(mass, volume){
  let density = mass/volume;
  return density;
};

console.log('Densidad sustancia: ', densitySubstance (85, 20));

//Exercise 10

function speedObject(distance, time){
 let speed = distance/time;
 return speed;
};

const car = {
  distance: 1000,
  time: 30,
}
let speedCar = speedObject(car.distance, car.time);

console.log('Velocidad del pepino', speedCar , 'm/s');

//Exercise 12

function convertCelciusToFahrenheit(degrees){
  var Celsius = degrees;
  var Farenheit = (Celsius * 9/5) + 32;
  return Farenheit;
}
// var degreesInput = prompt('Cuantos grados Celsius hace?');  Descomentar para probar
// console.log('Hace la increible cantidad de ', convertCelciusToFahrenheit(degreesInput), 'grados Farenheit!');

//Exercise 13
function calculatedBMI(weight, height){
  let BMI = weight / (height*height);
  return BMI;
}
// var weightInput = prompt('Introduce tu peso');
// var heightInput = prompt('Introduce tu altura');
// var BMI = calculatedBMI(weightInput, heightInput); Descomentar para probar

// switch (true) {
//   case (BMI < 18.5):
//     alert ("Estas en los huesos, come MAS!");
//     console.log("Estas en los huesos, come MAS!");
//     break;
//   case (BMI >= 18.5 && BMI < 24.9 ):
//     alert("Menudo tipin, bribon!");
//     break;
//   case (BMI >= 25 && BMI < 29.9 ):
//     alert("Menuda barriga cervecera estas echando");
//     break;
//   case (BMI > 30):
//     alert("Te estas poniendo como una foca, cabron!");
//     break;
//   default:
//     console.log('Valor incorrecto');
// }

//Exercise 14

function checkSeason(x){
  let month = x.toLowerCase();
  switch (month) {
    case "marzo":
    case "abril":
    case "mayo":
      alert('Es primavera!');
      break;
    case "junio":
    case "julio":
    case "agosto":
      alert('Es verano!');
      break;
    case "septiembre":
    case "octubre":
    case "noviembre":
      alert('Es otoño');
      break;
    case "diciembre":
    case "enero":
    case "febrero":
      alert('Es invierno!');
      break;

    default:
      alert('No existe ese mes, capullo');
  }
}

// var dato = prompt ("Elije un mes:");
// checkSeason(dato);

//Exercise 15

function findMax(x, y, z){
  const values = [x, y, z];
  values.sort(function (a, b) {
    return a - b
  });
  return values[values.length-1];
}

console.log(findMax(100, 1.2, 15));