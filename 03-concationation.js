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
let company = "Coding Academy";
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

//substring method
let substring = company.substring(7, 15);
console.log("Substring de variable company: ", substring);

//substr method
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let subsentence = (sentence.substr(0, 25)+ sentence.substr(54, 17));
console.log("sentence variable without because because because " + subsentence);

//includes method
if (company.includes("Academy")){
  console.log("Contain Academy word");
} else console.log("Dont contain Academy word");

//split method
let arrayCompany = company.split(" ");
console.log(arrayCompany[0]);
console.log(arrayCompany[1]);

//split string at comma and change it to an array
let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let arrayCompanies = companies.split(",");
for (let index = 0; index < arrayCompanies.length; index++) {
  const element = arrayCompanies[index];
  console.log(element);  
};

//replace method
let replaceCompany = company.replace("Coding", "Microsoft");
console.log("Replace Company: ", replaceCompany);

//CharAt method
let charCompany = company.charAt(10);
console.log(charCompany);

//CharCodeAt method (to show unicode of a character)

let unicodeChar = company.charCodeAt(7);
console.log("unicode of A: ", unicodeChar);