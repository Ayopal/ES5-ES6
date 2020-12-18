
const years = [1997, 1995, 1994, 2000];


/*
// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);



// ES6


// ES6 (one arg | one line of code)
const ages6 = years.map(el => 2016 - el);
console.log(ages6);
*/

// ES6 (two arg | parenthesis for the arg(x, y) | then arrow and output value)
let scndAges6 = years.map((el, index) => `Age element ${index + 1}: Born on ${el}, and is now currently ${2016 - el} years old`);
console.log(scndAges6);

//OR

// ES6 (two arg | parenthesis for the arg(x, y) | then arrow and curly bracket if more lines of code are involved | return function to give output)
scndAges6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: born on ${el}, and is now ${age}`
});
console.log(scndAges6);
