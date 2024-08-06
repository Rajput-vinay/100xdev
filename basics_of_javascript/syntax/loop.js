// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}

// Write a function called sum that finds the sum from 1 to a number

function sum(number){
    let result = 0;
    for(let i = 1; i<= number; i++){
    
        result += i;        
    }
    return result;

}

let answer = sum(5);
console.log(`sum of 1 to n is ${answer}`);