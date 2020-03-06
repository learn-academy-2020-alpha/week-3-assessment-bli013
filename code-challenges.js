// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// GoogleFoo Fibonacci sequence and how it works
// create a function called coolPeopleMath that takes in 1 argument
// create an array of 0 and 1
// use a forloop to add the two numbers and push it back into the array
const coolPeopleMath = (num) =>{
let arr = [1, 1]
  for (let i = 2; i < num+1; i++){
    arr.push(arr[i-2] + arr[i-1])
  }
  return arr
}
console.log(coolPeopleMath(9))


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]
// create a function called oddIsIn that takes in 1 argument as an array.
const orgNumOnly = (arr) => {
// filter method for finding num only (typeof method) and odds
    let orgArr= arr.filter(el => typeof el === "number").filter(el => {
      return el % 2 !== 0
    })
// .sort(el => (a, b) {return a-b}) to organize numbers least to greatest
    return orgArr.sort((a, b)=> a-b)
}
console.log(orgNumOnly(fullArr1))
console.log(orgNumOnly(fullArr2))






// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

// create a function called middleChild that takes in 1 argument as a string.
middleChild = (str) =>{
  //  use .length to get the total amount of letters,
  // then divide by 2 and return the indexOf result
  // if condition for when the word has even amount of letters that will then return both the middles
var numPot;
var numLength;

  if(str.length % 2 == 1) {
     numPot = str.length / 2
     numLength = 1
  } else {
     numPot = str.length / 2 - 1
     numLength = 2
  }
  return str.substring(numPot, numPot + numLength)

}
console.log(middleChild(middleLetters1));
console.log(middleChild(middleLetters2));





// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

// create a class called SphereArea
// class SphereArea {
//   constructor(radius) {
//     this.r = radius;
//   }
//   const areaOfSphere = (this.r) => {
//     let num = 4 * Math.PI * Math.pow(this.r, 2)
//     return num
//   }
// mySphere = new SphereArea (2)
// }
// console.log(SphereArea.mySphere);
const areaOfSphere = (r) => {
  let num = 4 * Math.PI * Math.pow(r, 2)
  return num
}
console.log(areaOfSphere(2));
console.log(areaOfSphere(3));
console.log(areaOfSphere(4));



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// create a function called addAdd that takes in an array
addAdd = (arr) => {
  var emptyArray = [];
  arr.reduce((a,b,i) => emptyArray[i] = a + b, 0)
  return emptyArray
}
console.log(addAdd(numbersToAdd1));
console.log(addAdd(numbersToAdd2));
console.log(addAdd(numbersToAdd3));
// return index 0 in new array, add index 1 and index 0 to return new index 1 and continue
