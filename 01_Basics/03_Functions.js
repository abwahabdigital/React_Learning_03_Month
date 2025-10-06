/* 
||**************************************************************||
||**************************************************************||
||**************************************************************||
||**************************************************************||
||Functions
||Scope 
||Arrow Function
||Function With Parameters,Loops,Iteration
||**************************************************************||
||**************************************************************||
||**************************************************************||
||**************************************************************||
*/

let age;
function checkAge(age = "Default 00") {
  if (age <= 18) {
    //console.log("You are ",age," years old and you are young")
    //console.log(age)
    return "You are ", age, " years old and you are young";
  } else if (age <= 50) {
    console.log("You are ", age, " years old and you are Adult");
    return "You are ", age, " years old and you are Adult";
  } else {
    console.log("You are ", age, " years old and you are getting old");
    return "You are ", age, " years old and you are getting old";
  }
  console.log(age);
}
//console.log(age)
checkAge(14);

//checkAge(20)
//checkAge(66)
//checkAge()
console.log("***************************");
console.log("***************************");
console.log("***************************");
let finalage = age + 100;
//console.log(finalage)

/*
1.minutesToHours
Write a function named minutesToHours that receives a 
number of minutes as parameter and returns a number representing 
the same amount of time but in hours.
*/
let minutes;
function minutesToHours(minutes) {
  let hours = minutes / 60;
  console.log(hours);
}
minutesToHours(150);
console.log("***************************");
console.log("***************************");
console.log("***************************");
/*
Write a function named averageOf4Numbers that receives 4 numbers 
as parameters and returns the mathematical average between them.
*/

function averageOf4Numbers(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4) / 4;
  console.log(average);
}
averageOf4Numbers(20, 50, 30, 80);
console.log("***************************");
console.log("***************************");
console.log("***************************");
/*
Write a function named concat3 that receives 3 strings as parameters 
(string1, string2, string3) and an additional string named separator.
The function should concatenate the three strings using the provided 
separator and return the result.
*/
function concat3(str1, str2, str3, str4) {
  let seperator = ",";
  let concating = str1 + seperator + str2 + seperator + str3 + seperator + str4;
  console.log(concating);
}
concat3("HTML", "CSS", "JS", "React");
console.log("***************************");
console.log("***************************");
console.log("***************************");
/* 
Write a function named max5 that receives 5 numbers as parameters 
and returns the biggest one between them.
*/

function max5(num01, num02, num03, num04, num05) {
  console.log(
    `${Math.max(num01, num02, num03, num04, num05)} is biggest number`
  );
}
max5(58, 32, 41, 21, 31);
max5(58, 61, 41, 21, 81);
console.log("***************************");
console.log("***************************");
console.log("***************************");
/*
5.getMonthsNeededToWait
Write a function name getMonthsNeededToWait that receives 2 numbers
as parameters, representing the index of two months.
The function should return the number of months we have to wait, 
to get from the first month to the second one.
*/

let monthA = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
let monthB = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function monthss(month01, month02) {
  console.log(monthA.indexOf(month02));
  console.log(monthB.indexOf(month01));
  return monthA.indexOf(month02) - monthB.indexOf(month01);
}
const remaningMonth = monthss(("dec", "feb"));
console.log(remaningMonth);
console.log("***************************");
console.log("***************************");
console.log("***************************");
/*
6.getGasolineAmount
You're driving to a new city for a small weekend trip. Write a function named
getGasolineAmount that receives 2 numbers as parameters:
the number of kilometers to your destination
average consumption of liters per 100km
The function should return the amount of gasoline needed to complete the entire round-trip.
*/

function getGasolineAmount(kilometers, averagePerLiter) {
  let petrolPrice = 271;
  let totalLiter = (kilometers * 2) / averagePerLiter;
  let result = ((kilometers * 2) / averagePerLiter) * petrolPrice;
  console.log(`Total Distance = ${Math.floor(kilometers * 2)}`);
  console.log(`Total Petrol Required = ${Math.floor(totalLiter)}`);
  console.log(`Total Amount Required: ${Math.floor(result)}`);
}
getGasolineAmount(400, 15);
console.log("***************************");
console.log("***************************");
console.log("***************************");

/*
Write a function named lastNRevert that receives 2 parameters:

a string named text
a number - n
and returns the last n characters of text but in reverse order.
*/

function lastNRevert(reverseString, number) {
  let converted = reverseString.split("");
  let convertedByReversed = converted.toReversed();
  for (let index = 0; index < number; index++) {
    const element = convertedByReversed[index];
    console.log(element);
  }
}
lastNRevert("T-SHIRTS", 4);
console.log("***************************");
lastNRevert("Abdul Wahab", 5);
console.log("***************************");
console.log("***************************");
console.log("***************************");

//Arrow Function

const name = () => {
  console.log("My Name is Abdul Wahab")
};
name()

//Arrow Function with parameter
const Fullname = (name) => {
  console.log("My Name is ",name)
};
Fullname("Abdul Wahab Anjum")