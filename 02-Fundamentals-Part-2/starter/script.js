'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive')
*/

/*
function logger () {
    console.log('My name is Brock');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/


/*
//Function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1998);


//function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1998);

console.log(age1, age2);

//Arrow function

const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement =  (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Brock'));
*/

/*
function cutFruitPieces(fruit){
    return fruit * 4;
};


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice was made with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear){
    const age = 2023 - birthYear;
    return age;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Brock'));
console.log(yearsUntilRetirement(1945, 'Jeffery'));
*/


/*
const friend1 = 'Mike';
const friend2 = 'Steve';
const friend3 = 'Pete';

const friends = ['Mike', 'Steve', 'Pete'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'John';
console.log(friends);


const firstName = 'Brock'
const brock = [firstName, 'Byrd', 2023 - 1998, 'Software Engineer', friends];

console.log(brock);


function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const years = new Array(2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009);

years.forEach(year => console.log(calcAge1(year)));

*/


/*
const friends = ['James', 'John', 'Pete'];
const newLength = friends.push('Jay'); //adds to the end of the array

console.log(friends);
console.log(newLength);

friends.unshift('Steven'); //adds to the beginning of the array
console.log(friends);

friends.pop(); //removes last element in array
const popped = friends.pop();
console.log(friends);

friends.shift(); //removes first element in array
console.log(friends);

console.log(friends.indexOf('John')); //returns index of passed element
console.log(friends.includes('Steven')); //returns true if element is found in array (uses strict equality)

if (friends.includes('John')) {
    console.log('You have a friends named John');
}
*/

/*
const brockArray = [
    'Brock',
    'Byrd',
    2023-1998,
    'Software Engineer',
    ['Cole, Dustin, Joe']
];

const brockObject = {
    firstName: 'Brock',
    lastName: 'Byrd',
    age: 2023-1998,
    occupation: 'Software Engineer',
    friends: ['Jay', 'Bob', 'Joe']
};

console.log(brockObject);
*/


/*
const brockObject = {
    firstName: 'Brock',
    lastName: 'Byrd',
    age: 2023-1998,
    occupation: 'Software Engineer',
    friends: ['Jay', 'Bob', 'Joe']
};

console.log(brockObject.firstName); //dot notation
console.log(brockObject['lastName']); //bracket notation

const nameKey = 'Name';
console.log(brockObject['first' + nameKey]);
console.log(brockObject['last' + nameKey]);

// const input = prompt('What do you want to know about Brock? Choose firstName, lastName, age, occupation, or friends?');

// if (brockObject[input]){
//     console.log(brockObject[input]);
// } else {
//     prompt('I do not understand this request. Please try again and choose firstName, lastName, age, occupation, or friends?')
// }


brockObject.location = 'Gulfport';
brockObject['favoriteDrink'] = 'Water';
console.log(brockObject);

console.log(`${brockObject.firstName} has ${brockObject.friends.length} friends, and his best friend is named ${brockObject.friends[0]}`)

*/

/*
const brock = {
    firstName: 'Brock',
    lastName: 'Byrd',
    birthYear: 1998,
    occupation: 'Software Engineer',
    friends: ['Jay', 'Bob', 'Joe'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) {
    //     return (2023 - birthYear);
    // }

    calcAge: function(){
        this.age = 2023 - this.birthYear
        return this.age;
    },

    getSummary: function(){
        // if(this.hasDriversLicense == true){
        //     return`${this.firstName} ${this.lastName} is a ${this.calcAge(this.birthYear)}-year old ${this.occupation}, and he has a driver's license.`;
        // } else {
        //     return `${this.firstName} ${this.lastName} is a ${this.calcAge(this.birthYear)}-year old ${this.occupation}, and he does not have a driver's license.`;
        // }

        return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year old ${this.occupation}, and he ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};


console.log(brock.calcAge(brock.birthYear));
console.log(brock.age);
console.log(brock.getSummary());
// console.log(brock['calcAge'](brock.birthYear));
*/

/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}


mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
  }
*/

/*
console.log('Lifting weights rep 1');

//for loops run while true
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep}`)
}
*/

/*
const brockArray = [
    'Brock',
    'Byrd',
    2023-1998,
    'Software Engineer',
    ['Cole, Dustin, Joe'],
    true
];

const types = [];

for(let i = 0; i < brockArray.length; i++) {
    console.log(brockArray[i], typeof(brockArray[i]));

    //types[i] = typeof(brockArray[i]);

    types.push(typeof(brockArray[i]));
}


console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

console.log("ONLY STRINGS")
for (let i = 0; i < years.length; i++) {
    if(typeof brockArray[i] !== 'string') continue;
    console.log(brockArray[i], typeof brockArray[i]);
}


console.log("BREAK WITH NUMBER")
for (let i = 0; i < years.length; i++) {
    if(typeof brockArray[i] === 'number') break;

    console.log(brockArray[i], typeof brockArray[i]);
}
*/

const brockArray = [
    'Brock',
    'Byrd',
    2023-1998,
    'Software Engineer',
    ['Cole, Dustin, Joe'],
    true
];

for(let i = brockArray.length - 1; i >= 0; i--) {
    console.log(i, brockArray[i]);
}


for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------ Starting Exercise ${exercise} ------`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting Weights repetition ${rep}`)
    }
}
















