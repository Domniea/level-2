// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y){
//     //check data types first and throw error
//     return x + y;
//   }


function sum(x, y){
    if ((x || y) != Number){
    throw ('input is wrong type of data')
   }
    return x + y;
  }

//   1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

try {
    sum(1, 2)
}

catch(err){
    console.log(err)
}

// 2a) Given a user object, write a function called login that takes a username and password as parameters. 
// Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

// var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   //check credentials
// }

var user = {username: "sam", password: "123abc"};

function login(username, password){
    if(username === user.username && password === user.password){
        console.log('login successful1')
    } else {
        throw ('username or password are incorrect')
    }
}


try{
    login('sam', '123abc')
}

catch(err){
    console.log(err)
}