const names = ['Abdul Wahab', 'Harish Hameed', 'Ali Khan', 'Rizwan', 'AB']
const age = [23, 43, 56, 32, 75]
const subjects = [
  'English',
  'Math',
  'Urdu',
  ['English Grammer', 'Urdu Grammer']
]
const newArray = []
console.log('***************************')
console.log('***************************')
console.log('***************************')
console.log(names[0]) //Indexing
console.log(typeof names)
console.log(age.sort()) //method
console.log(subjects[3][0]) //multi array indexing
//push elements in empty array
console.log(newArray)
newArray.push('Tomato', 'Onion', 'Cucumber', 'Chilli')
console.log(newArray)
//map two arrays
const mapArray = newArray.map(item => item + ' ' + names)
console.log(mapArray)
//concat two arrays into one main array
console.log(names.concat(newArray))
//filtre to filter out the values
const result = age.filter(checkage)
function checkage (umar) {
  if (umar >= 25) console.log(umar)
  //Method use to convert number into array
  const arrayNumbers = Array.from(String(umar), Number)
  console.log(arrayNumbers)
}
//spread use to spread array into singles
console.log(...names, ...newArray)

//reverse the orignal array
const namesReverse = names.reverse()
console.log("Reversal Value");
console.log(namesReverse)
console.log("Parent Variable Names");
console.log(names)
console.log('***************************')
console.log('***************************')
console.log('***************************')

const systems = ["Dell","HP","IBM","Lenovo","Apple"]
console.log(`Original Value`)
console.log(systems)
const systemsReversed = systems.toReversed()
console.log(`After To Reversed`)
console.log(systemsReversed);
console.log(`Again Check System Variable`)
console.log(systems);


console.log('***************************')
console.log('***************************')
console.log('***************************')
