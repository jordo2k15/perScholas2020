// Basic Function Concepts
// Function checks if the value of X is Odd or Even usning an if/else statment.

var x = 3;

function OddEven(x){
    if (x % 2 == 0)
    return "even";
    else {
        return "odd";
    }
};

console.log(OddEven(x));