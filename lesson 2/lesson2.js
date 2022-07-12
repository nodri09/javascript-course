// Task 1.
// Create function that takes n number of arguments and if the arguments are positive numbers prints them out. 
function rtn_pos_numbers (...args){
    for (nums of args){
        if (nums > 0) {
            console.log(nums);
        }
    }
}

console.log(`Task.1 \nPrint out positive numbers:`);
rtn_pos_numbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// Task 2.
// Create function that takes n number of args and sums them up.
function sum_numbers(...args){
    let sum = 0;

    for (nums of args){
        sum = sum + nums;
    }

    console.log(sum);
}

console.log("\nTask 2. \nPrint out sum of all the args of the function.")
sum_numbers(10, 50, 6, 7, 8, 11, 6, 3, 9);

// Task 3.
// Function should return first and last names if 'loggedin' is True and false if 'loggedin' is false

let user = {
    firstName: 'Giorgi',
    lastName: 'Saakadze',
    age: 32,
    isloggedin: true
}

function user_loggedin (user_obj) {
    if (user_obj.isloggedin === true) {
        return `${user_obj.firstName} ${user_obj.lastName}`;
    } else {
        return false;
    }
}

console.log("\nTask 3. \nReturn first and last names if 'loggedin' is True and false if 'loggedin' is false:")
console.log(user_loggedin(user));

// Task 4. 
// Create function that takes array as an argument and returns highest number from the array
let numbers = [2, 0, -5, 20, 10, 10, 14, 5, 100, 900, 1]

function highest_number(num_array) {
    let highsetNum = 0;

    for (i = 0; i < num_array.length; i++) {
        if (num_array[i] > num_array[i + 1]) {
            if (highsetNum < num_array[i]){
                highsetNum = num_array[i]
            }
        }
    }

    return highsetNum;
}

console.log("\nTask 4. \nCreate function that takes array as an argument and returns highest number from the array");
console.log(highest_number(numbers));