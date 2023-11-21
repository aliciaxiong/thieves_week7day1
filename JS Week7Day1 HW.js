//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
// */

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

//Write a function that takes in the string and the list of dog names
function findWords(dog_string, dog_names){

// loops through the list and checks that the current name is in the string passed in.
// i=0 is the start of index, i++ is to add 1 in each index
// `Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
// found online to use the includes() methods. 
// I will create a "for" to go index by index of each dog names and assigned it as "name"
// then I will use the ".toLowerCase" to lower case the string and the array 
// found online that javascript has an includes() method that can be used to match 
// I will have to then use the else statement for the NO Matches
    for(let i=0; i < dog_names.length; i++) {
        let name = dog_names[i];
        if (dog_string.toLowerCase().includes(name.toLowerCase())) {
            return console.log(`Matched ${dog_names}`)
        } 
        else {
            return console.log("No Match")
        }
    }
}
//Call method here with parameters
findWords(dog_string, dog_names);


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
//Given: 
 
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
function replaceEvens(arr) {
    for (let i=0; i < arr.length; i += 2) {      //using i+=2 for every 2 spaces 
        arr.splice(i, 1, "even index");
    }   
    return (arr);
}

replaceEvens(arr);
console.log(arr);

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




//CodeWars Homework 

//============Codewards Problem #1 ============//
// SIMPLE MULTIPLICATION - This kata is about multiplying a given number by 
// eight if it is an even number and by nine otherwise.

// Notes: Multiply an Even Number by 8 
// Notes: Multiply any other non even number by 9
// Notes: Use: multiplcation math operation and modulo
// Notes: use if statements then else statement 

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number *= 8
    } else {
        return number *= 9
    }
}

console.log(simpleMultiplication(9))
console.log(simpleMultiplication(4))
console.log(simpleMultiplication(2.3))
console.log(simpleMultiplication(-4))


//============Codewards Problem #2 ============//
// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.

//Notes: make sure x & y are divisible by n
//Notes: use modulo function 
//Notes: if x & y is divisible then it is true 
//Notes: use else statement for the false portion 
//Notes: Searched up that to combine the two formulas into the if statement, use && instead of &

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isDivisible(4, 25, 40))
console.log(isDivisible(5, 30, 60))