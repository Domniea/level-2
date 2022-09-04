// 1) Turn an array of numbers into a total of all the numbers

// function total(arr) {
//     // your code here
//  }
 
//  console.log(total([1,2,3])); // 6
 
numbers = [1,2,3]

function  total(array) {
    let final = array.reduce(function(final,x){
        final += x
        return final
    })
    return final
}
console.log(total([...numbers]))

// 2) Turn an array of numbers into a long string of all those numbers.

// function stringConcat(arr) {
//     // your code here
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"
 
numbers = [1,2,3]

function string(array) {
    let result = array.reduce(function(final, object) {
       return final + ',' + num
    })
    return result
}

console.log(string(numbers))

// 3) Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//     // your code here
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function totalVotes(arr) {
    const voterCount = arr.reduce(function(final, arr) {
        if (arr.voted === true) {
            final++
        }
        return final
    }, 0)
    return voterCount
}

console.log(totalVotes(voters))

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

// function shoppingSpree(arr) {
//     // your code here
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005
 
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

function shoppingSpree(arr) {
    let final = arr.reduce(function(final, arr){ 
        final += arr.price
        return final
    }, 0)
    return final
}

console.log(shoppingSpree(wishlist))

// 5) Given an array of arrays, flatten them into a single array

// function flatten(arr) {
//     // your code here
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ]
 

 function flatten(array) {
    let final = array.reduce(function(final,array){
        return final.concat(array)
        function string(array){
            let final = array.reduce(function(final, array) {
                return final + ',' + array
            })
        }
    })
    
    return final
 }

 console.log(flatten(arrays))

// 6) Given an array of potential voters, return an object representing the results of the vote

// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, 
// and how many of each of those age ranges actually voted. The resulting object containing this data should 
// have 6 properties. See the example output at the bottom.

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    // your code here
// }

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

function voterResults(voters) {
    let final = voters.reduce(function(final,voters){
        if (voters.age > 18 && voters.age <= 25) {
            final.numYoungPeople++
        }
        if (voters.age >= 18 && voters.age < 25 && voters.voted){
            final.numYoungVotes++
        }
        if (voters.age >= 26 && voters.age <= 35) {
            final.numMidsPeople++
        }
        if (voters.age >= 26 && voters.age <= 35 && voters.voted) {
            final.numMidVotesPeople++
        }
        if (voters.age >=36) {
            final.numOldPeople++
        }
        if (voters.age >=36) {
            final.numOldVotesPeople++
        }
        return final
    }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0,numOldVotesPeople: 0, numOldPeople: 0})
    return final
}

console.log(voterResults(voters))

// ### **Extra credit**

// Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be `https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos`.

// Once you get the data, use `.reduce()` to figure out how many `watchers` you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this :)

// > Note: If you've learned how to use the axios library, you can do this in node. Otherwise, you'll want to run this code in the browser's JavaScript context and either use XMLHttpRequest or jQuery's AJAX methods, meaning you'll need an HTML page and an associated script tag for your JavaScript.
// >