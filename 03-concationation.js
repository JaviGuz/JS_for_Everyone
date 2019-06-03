// Declaring different variables of different data types

var Data = {
     firstName: "Asabeneh",
     lastName: "Yetayeh",
     country: "Finland",
     city: "Helsinki",
     language: "JavaScript",
     job: "teacher", 
}
const age = 21;
let fullName = Data.firstName + " " + Data.lastName; // concatination, merging two string together.
console.log(fullName);

// let personInfoOne = fullName + ".I am " + age + ". I live in " + country; // ES5
// let personInfoTwo = `I am ${fullName}.I am ${age}. I live in ${country}`; //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
// console.log(personInfoOne);
// console.log(personInfoTwo);

// New code
let company = "Coding Academy"
console.log(company);
console.log("El tamaño del string es:", company.length);

let companyUpperCase = company.toUpperCase();
console.log(companyUpperCase); 

var upperStrings = "", lowerStrings = "";
for (i in Data) {
  upperStrings += Data[i].toUpperCase() + " ";
  lowerStrings += Data[i].toLowerCase() + " ";
}
console.log("All the strings of an object to capital letters: ", upperStrings);
console.log("All the strings of an object to lowercase letters: ", lowerStrings);
