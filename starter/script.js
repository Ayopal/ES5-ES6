////////////////////////////////////////////////////////////////////////// lecture: Let and Const


/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

*/




/*
//ES5
function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990
    }

    console.log(firstName + ',' + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicence5(true);




//ES6
function driversLicence6(passedTest) {

    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;

    }

    console.log(firstName + ',' + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicence6(true);




let i = 20;

for (let i = 0; i < 6; i++) {
    console.log(i);
}

console.log('--------' + i);
*/





////////////////////////////////////////////////////////////////////////Lecture: Blocks and IIFEs

/*
//ES5 
(function() {
    var c = 3;
})()

// console.log(c);  // prints error because the function is iife(private) and is only accessible by code inside the round brackets



//ES6
{
    const a = 2;
    let b = 2; 
    var c = 3;
}

// console.log(a);// prints error because the function is iife(private) and is only accessible by code inside the block i.e curly brackets

//console.log(c) // prints '3' because var is not block scoped but function

*/





////////////////////////////////////////////////////////////////////////Lecture: Stirngs


/*
//ES6
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}


//ES5
console.log('This is ' + firstName + ' ' + lastName + ', and i am ' + calcAge(yearOfBirth) );

//ES6 (template literals)
console.log(`This is ${firstName} ${lastName}, and i am ${calcAge(yearOfBirth)}`);


////////////////////Strings method//////////////////////////
const n = `${firstName} ${lastName}`;

//check
console.log(n.startsWith('o')); //false
console.log(n.endsWith('h')); //true
console.log(n.includes('Sm')); //true
console.log(`${firstName} `.repeat(5));

*/




/*
////////////////////////////////////////////////////////////////////////Lecture: Arrow Functions

const years = [1997, 1995, 1994, 2000];

// ES5
var ages5 = years.map(function(el){
    return 2016 - el;
});

console.log(ages5);



///////////ES6


// ES6 (one arg | one line of code)
const ages6 = years.map(el => 2016 - el);
console.log(ages6);
 
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

*/




////////////////////////////////////////////////////////////////////////Lecture: Arrow functions 2

/*

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}
box5.clickMe();  

 


// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box6.clickMe(); 




/////////////////////////////////ARROW FUNCTION

function person(name) {
  
    this.name = name;
}
 

//////ES5

person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el)
    {
        return this.name + ' is friend with ' + el;

    }.bind(this)
    );

    console.log(arr);
}

var friends = ['Bob', 'John', 'Mark'];
new person('John').myFriends5(friends);



////ES6

person.prototype.myFriends5 = function(friends) {

    const arr = friends.map(el => `${this.name}  is friend with  ${el}`
  );

    console.log(arr);
}

var friends = ['Bob', 'John', 'Mark'];
new person('Paul').myFriends5(friends);








////////////////////////////////////////////////////////////////////////Lecture: DESTRUCTURING (extract and store multiple items in single variable)


//////   ARRAY   

////// ES5
/*
var john = ['John', 26];
var Name5 = john[0];
var age5 = john[1];


////  ES6
const [name, age] = ['John', 26];


///// OBJECT

const obj = {
    firstName: 'John',
    lastName:  'Smith'

};


//// ES6

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);


const { firstName: a, lastName: b} = obj; // changing the variable from firstname and lastname to console.log(a) and console.log(b);


/////////////////////////////////////////////////////////////////
//////// RETURN MULTIPLE VALUE FROM A FUNCTION USING DESTRUCTURING

 // In ES5 if we want to return an object more than one value we use to return it as an object


 function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
 };

 const [age, retirement] = calcAgeRetirement(2016);
 console.log(age);
 console.log(retirement);

*/







 

////////////////////////////////////////////////////////////////////////Lecture: ARRAY IN ES6 / ES2015

/*

const boxes = document.querySelectorAll('.box'); // does not return array but this returns a nodelist
//console.log(boxes); // nodelist output
//// ES5

var boxesArr5 = Array.prototype.slice.call(boxes); //changing a nodelist to an ARRAY
console.log(boxesArr5); // converted the nodelist [boxes] to array

boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'gray';
});  // after we get the html code including the property and styles applied to it, we select the current line by [cur] and change the style.backgroundColor property of each line during the loop



//// ES6
const boxesArr6 = Array.from(boxes); // converted the nodelist [boxes] to array
//console.log(boxesArr6); // array output
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue'); // after we get the html code including the property and styles applied to it, we select the current line by [cur] and change the style.backgroundColor property of each line during the loop

// OR

//Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



///////////// LOOPS

/*


//we use forEach or map in ES5 but the problem are

1. We cannot break from them
2. We cannot also use continue statement


//ES5

for(var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        //continue; // when the 'box blue' is true the loop will skip the class name with 'box blue' and move to the next array.
        break; // when the 'box blue' is true the loop will stop at the class name with 'box blue'
    }

    boxesArr5[i].textContent = 'I changed to blue!';

};

// ES6
//we have a new loop statement for ES6 which is 'for of'
for (const cur of boxesArr6) {

    if(cur.className === 'box blue') {
        continue;
    }
    cur.textContent = 'I changed to blue!';

};


//// OR

for (const cur of boxesArr6) {

    if(cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
};


///////FIND ELEMENT IN ARRAY

// ES5
var age, full, ind, pAge;
age = [12, 10, 8, 21, 14, 11];

full = age.map(function(cur) {
    return cur >= 18;

});
//console.log(full); // [false, false, false, true, false];

ind = full.indexOf(true);
pAge = age[ind];

//console.log(full, ind, pAge);



//// ES6

 var ind6 = age.findIndex(cur => cur >= 18); // 3
 var find6 = age.find(cur => cur >= 18); // 21
 //or var pAge6 = age[ind]; // 21

 console.log(ind6, find6);




*/







 ////////////////////////////////////////////////////////////////////////Lecture: SPREAD OPERATOR (to expand anyment of an array in arguement or function calls)


 /*

function addFourAges (a, b, c, d) {

    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);


//// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
// apply function receieved an array and use the element of the array as an arguement
console.log(sum2);

//// ES6
const max3 = addFourAges(...ages); // '...' spread operator expands the ages to the full component
console.log(max3);


///// SPREAD OPERATOR FOR JOINING ARRAY (we can do push, pop, shift and unshift)
const familySmith = ['john', 'jane', 'mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];

console.log(bigFamily);


//// WE CAN ALSO USE ... 'SPREAD' ON NODELIST

const t1 = document.querySelector('h1');
const t2 = document.querySelectorAll('.box');

//const t22 = [...t2];
//console.log(t2, t22);

const t3 = [t1, ...t2]; // converted nodelist to Array and cantenate with h1;
//console.log(t3);

for (const cur of t3) {

    if(cur.className.includes('green')){

        cur.textContent = 'I escaped the change wow!!! because i am green';
        continue;
    }

    cur.style.color = 'blue';
    cur.textContent = 'OOPS! Dev Paul! changed us';
}; 


//// OR


//Array.from(t3).forEach(cur => cur.style.color = 'red');


*/









////////////////////////////////////////////////////////////////////////Lecture: REST PARAMETERS (passing arbitrary argument to function, used in function declaration to insert arbitrary argument in function)

/*
//// ES5
function isfullAge5() {
console.log(arguments); // argument is an object not an array so we need to convert before we can loop

var argsArr = Array.prototype.slice.call(arguments);

argsArr.forEach(function (cur) {
console.log((2016 - cur) >= 18);

})

};

//isfullAge5(1990, 1999, 1965);
//isfullAge5(1990, 1999, 1965, 2000, 1966, 1976);



//// ES6
function isfullAge6(...years  ){
    //rest operator converts the argument to array
years.forEach(cur => console.log((2016 - cur) >= 18));

};

isfullAge6(1990, 1999, 1965);






//// ES5
function isfullAge5(limit) {
    console.log(arguments); // argument is an object not an array so we need to convert before we can loop
    
    var argsArr = Array.prototype.slice.call(arguments, 1);
    //console.log(argsArr);
    
    argsArr.forEach(function (cur) {
    console.log((2016 - cur) >= limit);
    
    })
    
    };
    
    isfullAge5(18, 1990, 1999, 1965);
    //isfullAge5(1990, 1999, 1965, 2000, 1966, 1976);
    
    
    
    //// ES6
    function isfullAge6(limit, ...years){
        //rest operator converts the argument to array
    years.forEach(cur => console.log((2016 - cur) >= limit));
    
    };
    
    isfullAge6(18, 1990, 1999, 1965);

*/






/*

    ////////////////////////////////////////////////////////////////////////Lecture: DEFAULT PARAMETERS (used to preset parameters);


    //// ES5
    
    function SmithPerson(firstName, yearOfBirth, lastName, nationality) {


        //// setting preset valur for lastName and nationality
        lastName === undefined ? lastName = 'Smith' : lastName;
        nationality === undefined ? nationality = 'Nigeria' : nationality;

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.nationality = nationality;
    } // function constructor



    //// ES6

    //setting preset values in ES6
    function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.nationality = nationality;
    }; // function constructor


    //// OUTPUT

    var john = new SmithPerson('John', 1990);
    var emily = new SmithPerson('emily', 1996, 'paul', 'european');

    console.log(john, emily);

 */





 ////////////////////////////////////////////////////////////////////////Lecture: MAPS (use object as hash maps => map string key to arbitrary values, any primitive can be used as key.)

 const question = new Map();


 //// USING SET
 question.set('question', 'What is the official name of the lastest major Javascript version?');
 question.set(1, 'ES5');
 question.set(2, 'ES6');
 question.set(3, 'ES2015');
 question.set(4, 'ES7');
 question.set('correct', 3);
 question.set(true, 'Correct answer :D');
 question.set(false, 'Wrong, please try again!');



 //// USING GET TO RETRIEVE DATA

 console.log(question.get(1));
 console.log(question.size);


 //// USING HAS TO CHECK THE PRESENCE OF AN ITEM

if (question.has(4)){
   // question.delete(4);
console.log('has 4 in the question')
};


 //// LOOPING IN MAP

 // forEach (ES5)
 //question.forEach((value, key) => console.log(`This is key: ${key} and The value: ${value}`));


// for of(ES6)
  for (let [key, value] of question.entries()) {
if (typeof(key) === 'number') {
    console.log(`This is key: ${key} and The value: ${value}`);
} 

  }

  const ans = parseInt(prompt('Write the correct answer'));

  