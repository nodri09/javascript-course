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