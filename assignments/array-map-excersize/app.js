// Use the built-in `.map()` method on arrays to solve all of these problems

// Feel free to copy and paste the function and tests in this assignment.

// 1. Make an array of numbers that are doubles of the first array**

// function doubleNumbers(arr){
//     // your code here
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

numbers = [4, 20, 69]

function doubleNumbers(arr){
    return  arr.map( x => x * 2)
}

console.log(doubleNumbers([...numbers]))
// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
//     // your code here
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

arr = [4, 20, 69]

function stringItUp(array) {
    let result = array.map(num => String(num))
    return result
}
console.log(stringItUp([...arr]))
 
// 3) Capitalize the first letter of each name and make the rest of the characters lowercase

// function capitalizeNames(arr){
//     // your code here
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]

array = ["john", "JACOB", "jinGleHeimer", "schmidt"]

function capitalizeNames(array) {
    return array.map(function(string) {
        let newString = string.toLowerCase()
        let newWord = newString.charAt(0).toUpperCase() + newString.slice(1)
        return newWord
    })
    return result
}
  
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

// 4) Make an array of strings of the names.

// function namesOnly(arr){
//     // your code here
//   }
  
//   console.log(namesOnly([
    //   {
    //       name: "Angelina Jolie",
    //       age: 80
    //   },
    //   {
    //       name: "Eric Jones",
    //       age: 2
    //   },
    //   {
    //       name: "Paris Hilton",
    //       age: 5
    //   },
    //   {
    //       name: "Kayne West",
    //       age: 16
    //   },
    //   {
    //       name: "Bob Ziroll",
    //       age: 100
    //   }
//   ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]   

function namesOnly(array) {
   let result = array.map(object => object.name)
    return result
}

console.log(namesOnly(people))


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//     // your code here
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  
  people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
  ]

function areTheyOldEnough(array) {
    let result = array.map(function(object) {
        if (object.age >= 21) {
            return (`${object.name} can go to the Matrix`)
        }
        else {
            return (`${object.name} is to young`)
        }
    })
    return result
}

console.log(areTheyOldEnough([...people]))


// 6) Make an array of the names in h1s, and the ages in h2s

// function readyToPutInTheDOM(arr){
//     // your code here
//   }
//   console.log(readyToPutInTheDOM([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

  people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
  ]

function readyToPutInTheDOM(array) {
    let result = array.map(function(object){
        return `<h1>${object.name}</h1><h2>${object.age}</h2>`
    })
    return result
}

console.log(readyToPutInTheDOM([...people]))