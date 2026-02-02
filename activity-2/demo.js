console.log("\n== ARITHMETIC OPERATORS ==")

let a = 2;
let b = 5;

console.log('a =', a, 'b =', b);
console.log('Addition (a + b):', (a + b));
console.log('Subtraction (a - b):', (a - b));
console.log('Multiplication (a * b):', (a * b));
console.log('Division (a / b):', (a / b));
console.log('Modulus (a % b):', (a % b));

console.log('\nOperator Precedence:');
console.log('3 + 4 * 2 =', 3 + 4 * 2, '(multiplies first)');
console.log('(3 + 4) * 2 =', (3 + 4) * 2, '(parentheses first)');

console.log("\n== COMPARISON OPERATORS ==");

let x = 5;
let y = "5";
let z = 10;

console.log('x =', x, '(number), y = "' + y + '" (string), z =', z, '(number)');
console.log('x == y:', x == y, '(loose equality)');
console.log('x === y:', x === y, '(strict equality)');
console.log('x != y:', x != y, '(loose inequality)');
console.log('x !== y:', x !== y, '(strict inequality)');
console.log('x > z:', x > z);
console.log('x < z:', x < z);
console.log('x >= 5:', x >= 5);
console.log('x <= 5:', x <= 5);

console.log("\n== LOGICAL OPERATORS ==");

let isAdult = true;
let hasLicense = false;
let age = 20;

console.log('isAdult =', isAdult, 'hasLicense =', hasLicense, 'age =', age);
console.log('isAdult && hasLicense:', isAdult && hasLicense, '(AND - both must be true)');
console.log('isAdult || hasLicense:', isAdult || hasLicense, '(OR - at least one must be true)');
console.log('!hasLicense:', !hasLicense, '(NOT - opposite of hasLicense)');
console.log('age >= 18 && age < 65:', age >= 18 && age < 65, '(compound condition)');

console.log("\n== CONDITIONAL STATEMENTS ==");

let score = 92;

console.log('Score:', score);

if (score >= 90) {
    console.log('Grade: A - Excellent!');
} else if (score >= 80) {
    console.log('Grade B - Good Job!');
} else if (score >= 70) {
    console.log('Grade C - Satisfactory');
} else if (score >= 60) {
    console.log('Grade D - Needs Improvement');
} else {
    console.log('Grade F - Please Study More');
}

console.log("\n== SWITCH STATEMENT ==");

let dayOfWeek = 5; // 0 = Sunday, 1 = Monday, etc.

console.log('Day Number:', dayOfWeek);

switch (dayOfWeek) {
    case 0:
        console.log('Today is Sunday - Weekend');
        break;
    case 1:
        console.log('Today is Monday - Start of work week');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday - Hump Day!');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday - TGIF!');
        break;
    case 6:
        console.log('Today is Saturday - Weekend');
        break;
    default:
        console.log('Invalid Day Number');
}

document.getElementById("output").innerHTML = "<h3>Check the console for operator demonstrations!</h3>";