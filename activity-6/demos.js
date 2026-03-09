// Activity 6: Function and Scope Demonstrations
// This file contains learning demos separate from the main app

console.log("== Activity 6: Function and Scope Demos==");

// Part A: Function Demos
console.log("\n== FUNCTION DEMOS ==");

// Function declaration
function demonstrateDeclaration(message) {
    console.log("Function declaration:", message);
    return `Processed: ${message}`;
}

// Function expression
const demonstrateExpression = function (message) {
    console.log("Function expression:", message);
    return `Processed: ${message}`;
};

// Arrow function (brief introduction)
const demonstrateArrow = (message) => {
    console.log("Arrow function:", message);
    return `Processed: ${message}`;
};

console.log("Testing different function types:");
console.log(demonstrateDeclaration("Hello from declaration"));
console.log(demonstrateExpression("Hello from expression"));
console.log(demonstrateArrow("Hello from arrow"));

// Scope demos
console.log("\n== SCOPE DEMOS ==");

let globalVariable = "I'm global";

function scopeDemo() {
    let localVariable = "I'm local";

    console.log("Inside function:");
    console.log("- Can access global:", globalVariable);
    console.log("- Can access local:", localVariable);

    function nestedFunction() {
        let nestedVariable = "I'm nested";
        console.log("Inside nested function:");
        console.log("- Can access global:", globalVariable);
        console.log("- Can access local:", localVariable);
        console.log("- Can access nested:", nestedVariable);
    }

    nestedFunction();
    // console.log(nestedVariable); // This would cause an error
}

scopeDemo();
console.log("Outside function:");
console.log("-Can access global:", globalVariable);
// console.log(localVariable); // This would cause an error

console.log("\n== Funciton demos complete! ==");
console.log("Check the to-do list below for the enchanced app.");