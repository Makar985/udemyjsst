
/*
Variables and datatypes
*/

/*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge)
var job;
console.log(job)
job = 'Teacher'
console.log(job)
 
// varable naming rules
var _3years = 3;
var johnMark = 'John and Mark'
*/





/*
 Variable mutation and type coercion
 */

//Type coercion
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is ' + age + ' years old ' +
 job + '. Is he married ?' + isMarried);
*/

//Variable mutation

/*
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is ' + age + ' years old ' +
            job + '. Is he married ?' + isMarried)
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/






//Basic operators
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Loical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older then John');
var x;
console.log(typeof x);
*/






//Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x,y;
x = y = (3 + 5) * 4 - 6; //8 * 4 -6 //32 - 6 //26
console.log(x, y);

//2 + 4 + 5 // 6 + 5 // 11



//More operators

x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

x = x + 1;
x += 1;
x++;
console.log(x);
*/





//CODING CHALLENGE 1
/*
var mMass = Number(prompt("What is Mark's mass in kilogramms?"));
var mHeight = Number(prompt("What is Mark's height in meters?"));

var jMass = Number(prompt("What is John's mass in kilogramms?"));
var jHeight = Number(prompt("What is John's height in meters?"));

var mBMI = mMass  / (mHeight * mHeight);
var jBMI = jMass / (jHeight * jHeight);

var res = mBMI > jBMI;
console.log("Is Mark\'s BMI higher than John\'s? " + res);
console.log(mBMI, jBMI);
*/


//If / else statements

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + " is married");
} else {
    console.log(firstName + ' will hopefuly marry soon');
}

var mMass = Number(prompt("What is Mark's mass in kilogramms?"));
var mHeight = Number(prompt("What is Mark's height in meters?"));

var jMass = Number(prompt("What is John's mass in kilogramms?"));
var jHeight = Number(prompt("What is John's height in meters?"));

var mBMI = mMass  / (mHeight * mHeight);
var jBMI = jMass / (jHeight * jHeight);

if (mBMI > jBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s'); 
}

*/

//Boolean logic
/*
var firstName = 'John';
var age = prompt("What is John\'s age?");

if (age < 13) {
    console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
    console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man ");
} else {
    console.log(firstName + " is a man");
}
*/






//The ternary operator and Switch statements

/*
//Ternary operator
var firstName = 'John';
var age = prompt("What is John's age?");
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.') ;

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juive';
}*/

//Switch statement

/*
var job = 'cop';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives in Uber.');
        /*
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 38:
        console.log("John is a young man ");
    default:
        console.log(firstName + " is a man");
        
}
*/






// Truthy and Falsy values and equality operators

//falsy values: undefined, null, 0, '', NaN

//truthy values: NOT falsy values

/*var height;

height = 23;
if (height || height === 0) {
    console.log("Variable is defined.")
} else {
    console.log("Variable has NOT been defined.");
}

//Equality operators

if (height == '23') {
    console.log("The == operator does the type coercion!");
}
*/



//Coding challenge 2

/*
var J_1, J_2, J_3, M_1, M_2, M_3, JS, MS;

J_1 = 89;
J_2 = 120;
J_3 = 103;
M_1 = 116;
M_2 = 94;
M_3 = 123;
JS = (J_1 + J_2 + J_3) / 3;
MS = (M_1 + M_2 + M_3) / 3;
if (JS > MS) {
    console.log("The winner is...");
    console.log("John's team with score " + JS);
} else if (JS == MS) {
    console.log("The winner is...");
    console.log("FREINDSHIP with score" + JS);
} else {
    console.log("The winner is...");
    console.log("Mark's team with score " + MS);
}
*/



//Functions
/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}


var ageJohn = calculateAge(1990);
console.log(ageJohn);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + " years.");
}

yearsUntilRetirement(1990, 'John');

*/

//Function Statements and Expressions

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + " drives a cab in Lisbon"
        case 'designer':
            return firstName + ' designes beautiful websites';
        default:
            return firstName +  " does something else."
    }
}



console.log(whatDoYouDo(prompt("What is your job?"), 'John'));














