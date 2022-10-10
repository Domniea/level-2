const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think
// it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "blue"]

const mapVegetables = arr => arr.map((carrot) => ({ type: "carrot", name: carrot })
    )


console.log(mapVegetables(carrots))

// ### **Task 2**

// Re-write this `.filter()` ’s callback function using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = arr => arr.filter((person) => person.friendly)


console.log(filterForFriendly(people))

// ### **Task 3**

// Re-write the following functions to be arrow functions:

const doMathSum = (a, b) => a + b


const produceProduct = (a, b) => a * b

// ### **Task 4**

// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:Hi Kat Stark, how does it feel to be 40?
// Hi Kat Stark, how does it feel to be 40?

// `firstName` should default to `"Jane"lastName` should default to `"Doe"age` should default to `100`

// ### **Extra Credit**

// Use template literals to build the string

const printString = (fName = 'jane', lName = 'doe', age = 100) => `Hey ${fName} ${lName}, how does it feel to be ${age} years old?`

console.log(printString("adam", "domnie", 35))

// ### **Task 5**

// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = arr => arr.filter(animal => animal.type === "dog" ? true : false)

