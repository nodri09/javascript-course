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
// To Do