// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

/*
console.log("Brock");
console.log(23);

let firstName = 'Bob';
console.log(firstName);

let brock_byrd = "BB";
let $function = 27;

let person = 'Brock';
let PI = 3.1415;

let myFirstJob = 'Software Engineer';
let myCurrentJob = 'Software Engineer';
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log('Brock is a:', typeof 'Brock');

// javascriptIsFun = 'Yes!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1998;
// console.log(year);
// console.log(typeof year);

// //error with typeof with null value
// console.log(typeof null);

// //let can be changed
// let age = 24;
// age = 25;

// //const can not be changed
// const birthYear = 1998;
// birthYear = 1997;

// //var is function scoped
// var job = 'Software Engineer';
// job = 'Bum'

// const currentYear = 2023;
// const ageBrock = currentYear - 1998;
// const ageCole = currentYear - 1999;
// console.log(ageBrock, ageCole);

// console.log(ageBrock * 2, ageBrock / 2, 2 ** 3);

// const firstName = 'Brock';
// const lastName = 'Byrd';
// console.log(firstName + ' ' + lastName);

// //Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1

// console.log(x);

//comparison operator
// console.log(ageBrock > ageCole);
// console.log(ageBrock >= 18);

// const isFullAge = ageBrock >= 18

// console.log(currentYear - 1998 > currentYear - 1997);

// const averageAge = (ageBrock + ageCole) / 2

// console.log(ageBrock, ageCole);
// console.log(averageAge);


// var markHeight = 1.69;
// var markWeight = 78;
// var johnHeight = 1.95;
// var johnWeight = 92;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);

// var markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);


// const firstName = 'Brock';
// const job = 'Software Engineer';
// const birthYear = 1998;
// const year = 2023;

// const brock = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

// console.log(brock);

// const brockNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(brockNew);

// console.log(`Always use back ticks for strings because why not`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`)

// const age = 19;
// const isOldEnough = age >= 21;

// if(isOldEnough) {
//     const yearsAble = age - 21;
//     if(age > 21){
//         console.log(`You've been able to drink for ${yearsAble} years you old bastard.`)
//     } else {
//         console.log(`You are ${age} years old, you are old enough to drink.`);
//     }
// } else {
//     const yearsLeft = 21 - age;
//     console.log(`You are ${age} years old, you are not old enough to drink. You have ${yearsLeft} years left until you can drink.`);
// }

// const birthYear = 1998;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);


// var markHeight = 1.69;
// var markWeight = 78;
// var johnHeight = 1.95;
// var johnWeight = 92;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);

// var markHigherBMI = markBMI > johnBMI;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else{
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// switch (markBMI > johnBMI) {
//     case 0:
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
//     break;
//     default:
//         console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }


//Conversion - Explicitly convert one type to another
//Coercion - Javascript indirectly converting one type to another

//type conversion
// const inputYear = '1998';
// console.log(typeof inputYear);
// console.log(typeof Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Brock')); //NaN - Invalid Number
// console.log(typeof NaN);
// console.log(String(25));

//type coercion
// console.log('I am ' + 25 + ' years old'); // I am 25 years old
//console.log('23' - '10' - 3); //10
//console.log('23' + '10'  + 3) //23103
//console.log('23' * '2'); //46 only way the * operator to work is with numbers


//let n = '1' + 1; // '11'
//n = n - 1; // '11' - 1
//console.log(n); //10


//5 falsey values: 0, '', undefined,null, NaN


// const money = 100
// if (money) {
//     console.log('Don\'t spend all of your money!');
// } else {
//     console.log('Try to get a job!');
// }

// == does type coercion '18' == 18 = true
// === does not do type coercion '18' === 18 = false
//const age = '18';
//better to triple equal (better practice to make sure types are same)
// if (age === 18) console.log('You just became an adult(strict)');

// if (age == 18) console.log('You just became an adult(loose)');

// const favoriteNumber = Number(
//     prompt("What's your favorite number?"));

// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);

// if (favoriteNumber === 23) {
//     console.log(`Cool! 23 is a cool number!`)
// } else if (favoriteNumber === 15) {
//     console.log(`Cool! 15 is a cool number!`)
// } else {
//     console.log(`Number is not 15 or 23, so it's lame!`)
// };

// if (favoriteNumber !== 23) {
//     console.log('Why is your favorite number not 23?');
// };

// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive!!')
// }


// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

//putting scores into arrays
// const dolphinsScore = [100, 75, 100];
// const koalasScore = [99, 115, 98];
// const gameNumber = [1, 2, 3]

// // reducing arrays to the average score
// const avg = scoresArray => scoresArray.reduce((a, b) => a + b) / scoresArray.length;

// //Defining margin of victory and winner
// let marginOfVictory;
// let winner;
// if(avg(koalasScore) > avg(dolphinsScore) && avg(koalasScore) >= 100){
//     winner = 'Koalas';
//     marginOfVictory = (avg(koalasScore) - avg(dolphinsScore)).toFixed(2);
// } else if(avg(dolphinsScore) > avg(koalasScore) && avg(dolphinsScore) >= 100) {
//     winner = 'Dolphins'
//     marginOfVictory = (avg(dolphinsScore) - avg(koalasScore)).toFixed(2);
// } else if (avg(dolphinsScore) === avg(koalasScore)) {
//     winner = 'No Winner'
//     console.log('The game is a tie!')
// } else if (avg(dolphinsScore) < 100 > avg(koalasScore)) {
//     winner = 'No Winner'
//     console.log('The game is a tie!')
// } else {
//     winner = 'No Winner'
//     console.log('Tied because your score is not high enough to win.')
// }
// //logging both teams average score
// console.log(`Final Score: Koalas: ${(avg(koalasScore)).toFixed(2)} | Dolphins: ${avg(dolphinsScore).toFixed(2)}`);

// console.log(``);

// if(winner === 'Koalas' || winner === 'Dolphins'){
//     console.log(`The ${winner} are the winners! They won by an average of ${marginOfVictory} points!`);
//     dolphinsScore.forEach((d, index) => {
//         const k = koalasScore[index];
//         const gN = gameNumber[index];
//         console.log(`Results for Game ${gN}: Koalas: ${k} Dolphins: ${d} `);
//       });
// } else {
//     console.log('The game resulted in a tie.')
// }

/*
const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('The day is Monday');
        console.log('Check your email');
        break;
    case 'tuesday':
        console.log('They day is Tuesday');
        console.log('Check your calendar');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('The day is Wednesday');
        console.log('Check your texts');
        break;
    case 'friday':
        console.log('The day is Friday');
        console.log('It\'s Friday, you ain\'t got no job.');
        break;
    case 'saturday':
    case 'sunday':
        console.log('The day is Saturday');
        console.log('Enjoy your weekend');
        break;
    default:
        console.log(`That's not a valid day.`)

}
*/

/*
const age = 22
age >= 21 ? console.log('Old enough to drink') :
console.log('Not old enought to drink');

const drink = age >= 21 ? 'beer' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 21 ? 'beer' : 'water'}`);
*/

// Test for bill values 275, 40 and 430
//Calculate the tip on the bill value
//Print a string containing the bill, the tip, and the final value
//'The bill was 275, the tip was 41.25, and the total value was 316.25.'

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ?
 bill * .15 : bill * .20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}.`)
*/

















































