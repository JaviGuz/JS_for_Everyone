// Declaring different variables of different data types
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
const age = 21;

let fullName = firstName + " " + lastName; // concatination, merging two string together.
console.log(fullName);

let personInfoOne = fullName + ".I am " + age + ". I live in " + country; // ES5
let personInfoTwo = `I am ${fullName}.I am ${age}. I live in ${country}`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoOne);
console.log(personInfoTwo);

// New code
let company = "Coding Academy"
console.log(company);
console.log("El tamaño del string es:", company.length);

let companyUpperCase = company.toUpperCase();
console.log(companyUpperCase);    