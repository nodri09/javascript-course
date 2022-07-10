// Task 1.
// Define user object
let user = 
{
    firstname: 'Giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
}

// Print only user status

console.log(`\nTask 1. \nstudent Status is: ${user['studentstatus']}.`);

// Task 2.
// Iterate through all properties of the object and print out to console
console.log("\nTask 2.\nAll properties of the user object:")
for (const key in user){
    console.log(`${key}: ${user[key]};`);
}

// Task 3.
// Looping though array of numbers and printint out only those numbers which are more than 5
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

console.log(`\nTask 3.\nPrinting out number that are more than 5 from the array: numbers = [${numbers}]`);
for (i=0; i < numbers.length; i++) {
    if (i > 5) {
        console.log(i);
    }
}

// Task 4.
// Define another user object
let anotherUser = {
    name: 'Goirgi',
    age: 20,
    studentstatus: 'active'
}

// Print different things based on different conditions
console.log("\nTask 4. \nPrint different things based on different conditions of the another user object properties:")
if (anotherUser.age > 18 && anotherUser.studentstatus === 'active' ){
    console.log('Hello');
} else if (anotherUser.name === 'levan') {
    console.log("Hello Giorgi");
} else if (anotherUser.age < 25 || anotherUser.studentstatus === 'active') {
    console.log("Hello world!");
} else {
    console.log('Error');
}

// Task 5.
// Define some array
let someArray = ['watermelon', 'pear', 10, 34, 50, 'apple', 'pinepple'];

// If the type of some array element is string than print it out
console.log(`\nTask 5.\nIf the type of some array [${someArray}] element is string than print it out:`)

for (i = 0; i < someArray.length; i++){
    if (typeof(someArray[i]) === 'string'){
        console.log(someArray[i]);
    }
}


// Task 6.
// Define number's multilevel array
let numArray = [[2, -3, 5, 10], [25, -24, 11, 100], [-6, -7, 10]];

// Iterate through number's array and print out positive numbers.
console.log(`\nTask 6.\nIterate through number's [${numArray}] array and print out positive numbers:`) 
for (i = 0; i < numArray.length; i++){
    for (j = 0; j < numArray[i].length; j++){
        if (numArray[i][j] > 0){
            console.log(numArray[i][j]);
        }
    }
}

// Task 7.
// Define array from which you will take out numbers which are module of 5
let moduleArray = [32, 10, 'hello', null, 'hello2', 50];

console.log(`\nTask 6. \nPrint out only numbers which are modules of 5 from module array [${moduleArray}]`);

for (i = 0; i < moduleArray.length; i++){
    if (moduleArray[i] === null) {
        moduleArray[i] = undefined;
    }

    if ((moduleArray[i] % 5) === 0){
        console.log(`${moduleArray[i]}`);
    }
}