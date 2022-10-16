// Use the

// ```
// Rest Operator
// ```

// to help this function return an array of animals, no matter how many animals are passed to it:

// ```
// function collectAnimals(/*your code here*/) {
//     /*and here*/
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// ```
function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("cat", "mouse", "dog"))

// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a 
// variable name is mentioned twice in both the name and value of properties in your object:

// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
//      {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }


function combineFruit(fruits, sweets, vegetables) {
    return {fruits, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

// function parseSentence(_________){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//   parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   });

  function parseSentence({location, duration}) {
    return `We're going to have a good time in ${location} for ${duration} days`
  }

  console.log(parseSentence({
    location: "Burly Idahoe",
    duration: "2 weeks"
  }))

//   Use array destructuring to make this code ES6:
function returnFirst(items){
    const [firstItem, secondItem] = items; /*change this line to be es6*/
    return secondItem
}

const nums = [1, 2, 3, 4]
// var {num1, num2, num3, num4} = nums

console.log(returnFirst(nums))

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}; and ${thirdFav}.`
}

console.log(returnFavorites(favoriteActivities))

/*Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
You will need to change how the arrays are passed in. 
You may write it assuming you will always recieve three arrays if you would like to.*/

const combineAnimals = (array1, array2, ...otherArrays) => array1.concat(array2, ...otherArrays)


const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]


/*Try to make the following function more ES6y:*/

const product = (a, b, c, d, e) => {
    var numbers = [a,b,c,d,e]
  
    return numbers.reduce((acc, number) => acc * number, 1)
  }
  
console.log(product(1, 2, 3, 4, 5))

// Make the following function more ES6y. Use at least both the rest and spread operators:

const unshift = (array, ...others)  => [...others].concat(array);

var numbers = [11, 22, 33, 44, 55]

console.log(unshift([1, 2, 3], ...numbers))