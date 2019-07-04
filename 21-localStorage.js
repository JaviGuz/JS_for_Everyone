localStorage.setItem('name', 'Asabeneh');
console.log(localStorage); //Storage {name: "Asabeneh", length: 1}


localStorage.setItem('age', 200);
console.log(localStorage) //Storage {age: "200", name: "Asabeneh", length: 2}

const skills = ['HTML', 'CSS', 'JS', 'React'];
//Skills array has to be stringfied first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON);
console.log(localStorage);

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let getskills = localStorage.getItem('skills');
console.log(name, age, getskills);

let skillsObj = JSON.parse(localStorage.getItem('skills'), undefined, 4);
console.log(skillsObj);