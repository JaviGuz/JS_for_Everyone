// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB"
// ];
// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary"
// ];
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
// const shoppingCart = [
//   "Milk",
//   "Mango",
//   "Tomato",
//   "Potato",
//   "Avocado",
//   "Meat",
//   "Eggs",
//   "Sugar"
// ];
// console.log(webTechs);
// console.log(webTechs.length); // => to know the size of the array, which is 7
// console.log(webTechs[0]); //--> HTML;
// console.log(webTechs[webTechs.length - 1]); //--> MongoDB
// console.log(countries);
// console.log(numbers);
// console.log(shoppingCart);

/***************EXERCISES**************/
const emptyArray = [];
var numbers = [0, 1, 2, 3, 4, 5, 6];
var middle = Math.round((numbers.length / 2) - 1);

console.log("Cantidad array: ", numbers.length);
console.log("Primer numero: ", numbers[0]);
console.log("Mitad numero: ", middle);
console.log("Ultimo numero: ", numbers[numbers.length - 1]);

const mixedDataTypes = [
  "String",
  false,
  5,
  6.32,
  true
];

console.log(mixedDataTypes.length);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];

console.log(itCompanies);
console.log("number of companies in the array: ", itCompanies.length);

var middleCompany = Math.round((itCompanies.length / 2) - 1);
console.log("Cantidad array: ", itCompanies.length);
console.log("Primera empresa: ", itCompanies[0]);
console.log("Mitad empresa: ", itCompanies[middleCompany]);
console.log("Ultima empresa: ", itCompanies[itCompanies.length - 1]);

for (let index = 0; index < itCompanies.length; index++) {
  console.log(`Compa\u00f1ia ${index}: `, itCompanies[index]);
};
console.log("*************************");
for (let index = 0; index < itCompanies.length; index++) {
  console.log(`Compa\u00f1ia ${index}: `, itCompanies[index].toUpperCase());
};

var x = itCompanies.toString();
x = x.replace(/,([^,]*)$/, '\ and $1');
console.log(x, 'are big companies');

console.log(itCompanies.slice(0, -1).join(", "), "and", itCompanies[itCompanies.length - 1], 'are big companies');

/*********************/

// var company = prompt("Please enter the company");
// if (itCompanies.includes(company)){
//   console.log(`The company ${company} exists`);
// } else {
//   console.log(`The company ${company} doesnt exist`);
// };

// /*************************************/
newCompanies = [];

for (let index = 0; index < itCompanies.length; index++) {
  if ((itCompanies[index].match(/o/g) || []).length >= 2) {
    newCompanies.push(itCompanies[index]);
  }
};
console.log(`Compa\u00f1ias 2 o mas o's: ${newCompanies}`);
console.log("Compa\u00f1ias 2 o mas o's:", newCompanies.join(", "));

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues);
eightEmptyValues.fill("Veni", 0, 5);
eightEmptyValues.fill("No te hagas la divina", 5, 8);
console.log(eightEmptyValues);

/*************** */

 const numberArray = [1, 2, 3, 4, 5];
 numberArray.splice(0, 1);
//console.log(numberArray.splice(0, 1)); // remove the first it
 console.log(numberArray); 


 /********************* */

 const todoList = [{
     task: 'Learn JavaScript',
     time: '4/3/2019 8:30',
     completed: true

   },
   {
     task: 'Help some in need',
     time: '4/3/2019 4:00',
     completed: false

   },
   {
     task: 'Do some physical exercises',
     time: '4/3/2019 6:00',
     completed: false

   }
 ]

 console.log(todoList);
 console.log(todoList.length);
 console.log(" --- Mis tareas ---");
 for (let i = 0; i < todoList.length; i++) {
   if (todoList[i].completed) {     
     console.log(todoList[i].task, "at", todoList[i].time);
     console.log("Completed");
     console.log("************************");
   } else {     
     console.log(todoList[i].task, "at", todoList[i].time);
     console.log("Not Completed");
     console.log("************************");
   }
 }