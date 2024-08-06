// 4. Functions

function greet(mess){
    console.log(`good morning ${mess}`);
}

let message = greet("Vinay");

// Assignment #1
// Write a function sum that finds the sum of two numbers. 



function sum(a,b){
    console.log( `sum of ${a+b}`);
}

let store = sum(5,5);

// Side quest - Try passing in a string instead of a number and see what happens?

function sum2( a,b){
    console.log(`sum of string is ${a+b}`);
}

let store2 = sum2("5","5")

// Assignment #2

// Write a function called canVote that returns true or false if the age of a user is > 18

function canvote(age){
    if(age >18){
        return true;
    }
    else{
        return false;
    }
}

let dovote = canvote(16);
if (dovote == true){
    console.log("true");
}else{
    console.log("false");
}