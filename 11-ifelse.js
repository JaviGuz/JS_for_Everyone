//if else
if (isRaining) {
  console.log("It is raining. You need a rain coat.");
} else {
  console.log("It is not raining. No need for rain coat.");
}

//promp if else

var ageUserInput = prompt("What age do you have ?");
if (ageUserInput >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log("You are left with", (18 - ageUserInput), 'years to drive.');
}
