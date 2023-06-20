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

const friends = ['James', 'John', 'Jay'];
