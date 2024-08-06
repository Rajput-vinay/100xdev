// object

// let nameDb = {
//     name :"vinay",
//     age :18,

// }

// console.log(`${nameDb.name} age is ${nameDb.age}`);


// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age

function greet(nameDb){
    const {name,age} = nameDb;
    return `Namaste ${name}! your age is ${age}`;
}

let nameDb = {
    name :"vinay",
    age :18,

}

let answer = greet(nameDb)
// console.log(answer);




// assignment #2
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)


function greet2(db){
    const {name,age,gender} = db;
    if(gender == "female"){
        return `Hi Mrs ${name}, your age is ${age}`;
    }else{
        return `Hi Mr ${name}, your age is ${age}`;
    }
}

function ifCanVote(db){
    const {age} = db;

    if(age>=18){
        return `can vote`;
    }else{
        return `cant vote`;
    }
}

let db={
    name:"vinay",
    age:20,
    gender:"male"
}

let callfunction = greet2(db);
console.log(callfunction);

// Assignment #3
// Also tell the user if they are legal to vote or not

let voteFunCall = ifCanVote(db);
console.log(voteFunCall);


// Arrays

const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

// Assignment
// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

// using loop
function printEven(arr){
    let arr2 = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

// using filter

function filterArray(arr){
    const answer = arr.filter((number => number%2 == 0));
    return answer;
}

let arr = [10,5,8,4,93];
let ans = printEven(arr);
console.log(ans);

let filterAnswer = filterArray(arr);
console.log(`filter array output ${filterAnswer}`);



// Array of Objects

const Users = [
    {
        name:"vinay",
        age:20
    },{
        name:"raman",
        age:10
    }
]

const user1 = Users[0];
console.log(user1);
const user2 = Users[1].age;
console.log(`user2 age is ${user2}`);

// Assignment
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old


function aboveAge (Users2){
    return Users2.filter(number => number.age > 18);
}

const Users2 = [
    {
        name:"vinay",
        age:20
    },{
        name:"raman",
        age:10
    }
]

let storeAnswer = aboveAge(Users2);
console.log(storeAnswer);



// Object of Objects

const user4 = {
    name:"vinay",
    age:20,
    address :{
        city:"agra",
        state:"Uttar Pradesh",
        country:"India",
    }
}

let storekarBhai = user4.address.city;
console.log(storekarBhai);
