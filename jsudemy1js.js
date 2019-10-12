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

var mMass = Number(prompt("What is Mark's mass in kilogramms?"));
var mHeight = Number(prompt("What is Mark's height in meters?"));

var jMass = Number(prompt("What is John's mass in kilogramms?"));
var jHeight = Number(prompt("What is John's height in meters?"));

var mBMI = mMass  / (mHeight * mHeight);
var jBMI = jMass / (jHeight * jHeight);

var res = mBMI > jBMI;
console.log("Is Mark\'s BMI higher than John\'s? " + res);
console.log(mBMI, jBMI);



























