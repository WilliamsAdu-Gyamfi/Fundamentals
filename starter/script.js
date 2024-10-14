"use strict";

/*let hasCar = false;
const canDrive = true;
if(canDrive) hasCar = true;
if(hasCar) console.log("good to go!");
*/

//FUNCTIONS
/*
function describeCountry(country, population, capitalCity){
    const myCountry = ${country} has ${population} million people and it's capital city is ${capitalCity}
    return myCountry;
}
//CALLING/RUNNING/INVOKING
const myCountry1 = describeCountry("Ghana", 35, "Accra");
console.log(myCountry1);
const myCountry2 = describeCountry("Togo", 25, "Lome");
console.log(myCountry2);
const myCountry3 = describeCountry("Nigeria", 55, "Abuja");
console.log(myCountry3);
*/

//FUNCTION DECLARATION
/*function percentageOfWorld1(country, population){
    const percentage = (population / 7900 * 100);
    const myWorld = ${country} has ${population} million people and it's about ${percentage}% of the world population
    return myWorld;
}
//CALLING/RUNNING/INVOKING
const myWorld1 = percentageOfWorld1("Ghana", 35);
console.log(myWorld1);
const myWorld2 = percentageOfWorld1("Nigeria", 55);
console.log(myWorld2);
const myWorld3 = percentageOfWorld1("Togo", 25);
console.log(myWorld3);
*/

//FUNCTION EXPRESSION
/*
const percentageOfWorld2 = function (country, population){
    const percentage = (population / 7900 * 100);
    const myWorld = ${country} has ${population} million people and it's about ${percentage}% of the world population
    return myWorld;
}
//CALLING/RUNNING/INVOKING
const myWorld4 = percentageOfWorld2("Ghana", 35)
console.log(myWorld4);
const myWorld5 = percentageOfWorld2("Nigeria", 55);
console.log(myWorld5);
const myWorld6 = percentageOfWorld2("Togo", 25);
console.log(myWorld6);
*/

//ARR0W FUNCTIONS
/*const percentageOfWorld3 = (country, population) => {
    const percentage = (population / 7900 * 100);
    const myWorld = ${country} has ${population} million people and it's about ${percentage}% of the world population
    return myWorld;
}
//CALLING/RUNNING/INVOKING
const myWorld4 = percentageOfWorld3("Ghana", 35);
console.log(myWorld4);
const myWorld5 = percentageOfWorld3("Nigeria", 55);
console.log(myWorld5);
const myWorld6 = percentageOfWorld3("Togo", 25);
console.log(myWorld6);
*/

//FUNCTIONS CALLING OTHER FUNCTIONS

/*const percentageOfWorld2 = function (population){
    return population / 7900 * 100;
}
const describePopulation = function(country, population){
    const percent = percentageOfWorld2(population);
    return ${country} has ${population} million people, which is about ${percent} of the world;
}

console.log(describePopulation("Ghana", 40));
console.log(describePopulation("Nigeria", 50));
console.log(describePopulation("Togo", 20));
*/

//CODING CHALLENGE 1
/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
GOOD LUCK
�
�
*/

/*const calcAverage = (a, b, c) => (a + b + c) / 3;
const averageDolphin = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(685, 584, 49);
console.log(averageDolphin, averageKoalas);

const checkWinner = function(avgDolphin, avgKoalas){
    if(averageDolphin > averageKoalas && averageDolphin >= 2 * averageKoalas){
        console.log(Dolphin win(${averageDolphin} Vs.${averageKoalas}));
    }else if(averageKoalas > averageDolphin && averageKoalas >= 2 * averageDolphin){
        console.log(Dolphin win(${avgKoalas} Vs.${avgDolphin}));
    }else{
        console.log("No Win!");
    }
}
//console.log(checkWinner(averageDolphin, averageKoalas));
checkWinner(averageDolphin, averageKoalas
);
*/

//ARRAYS
//ASIGNMENT 1
/*1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/
/*
const percentageOfWorld2 = population => population / 7900 * 100;
const population = [35, 50, 30, 25];
console.log(population.length);
const percentages = [percentageOfWorld2(population[0]), percentageOfWorld2(population[1]), percentageOfWorld2(population[2]), percentageOfWorld2(population[population.length - 1])];
console.log(percentages);
*/

//ASSIGNMENT 2
/*1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

/*
const neighbours = ["Ghana", "Nigeria"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
neighbours.includes("Germany");
console.log(neighbours);
if(neighbours.includes("Germany")){
    console.log("Central European country")
}else{
    console.log("Probably not a central European country")
}
neighbours[1] = "Togo";
console.log(neighbours);
*/

//CODING CHALLENGE 2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
�
�
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)
*/

/*
const calcTip = function(bill){
    const calc = bill >= 50 && bill <= 300 ? 15 / 100 * bill : 20 / 100 * bill;
    return calc;
}
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);
const total = [calcTip(bills[0]) + tip[0], calcTip(bills[1])  + tip[1], calcTip(bills[bills.length - 1])  + tip[2]];
console.log(tips);
*/

//OBJECTS
//SMALL CHALLENGE
/*
const williams = {
    firstName: "Williams",
    lastName: "Gyamfi",
    age:2024 - 2004,
    job:"Analyst",
    friends:["Josh", "Lizy", "Ike"]
}

const nameKey = "Name";
console.log(williams["first" + nameKey]);
console.log(williams["last" + nameKey]);

const info = ${williams.firstName} has ${williams.friends.length} friends and his best frieend is ${williams.friends[0]}
console.log(info);
*/

//OBJECTS
//ASSIGNMENT 1
/*
const myCountry = {
    country: "Ghana",
    capital: "Accra",
    language: "English",
    population: 35,
    neighbours: ["Nigeria", "Togo", "Bennin"]
}
console.log(myCountry[i]);
*/

//ASSIGNMEN 2
// Dot vs. Bracket Notation

/*
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neibouring countries and a capital called ${myCountry.capital}`);
const infoCountry = myCountry.population += 2;
console.log(infoCountry);
const infoCountry1 = myCountry["population"] -= 2;
console.log(infoCountry1);
//*/

//OBJECTS METHODS
/*
const williams = {
    firstName: "Williams",
    lastName: "Gyamfi",
    age:2024 - 2004,
    job:"Analyst",
    friends:["Josh", "Lizy", "Ike"],
    hasDriverLicense: false,

    getSummary: function(){
    return ${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.hasDriverLicense ? "a" : "no"}  driver's license
    }
}
console.log(williams.getSummary());
//*/

//ASSIGNMENT
/*
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/
/*
const myCountry = {
    country: "Ghana",
    capital: "Accra",
    language: "English",
    population: 35,
    neighbours: ["Nigeria", "Togo", "Bennin"],
    checkIsland: "island",

    describe: function () {
        return (`${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbours.length === 0 ? "true" : "false"} neibouring countries and a capital called ${this.capital} and also`)
    }


}
console.log(myCountry.describe());
*/

//CODING CHALLENGE 3
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height  2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height  2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

/*
const markMiller = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    hight: 1.69,
    calcBMI: function(){
        const markMillerBMI = this.mass / this.hight ** 2
        return markMillerBMI;
    }
}
const johnSmith = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    hight: 1.95,
    calcBMI: function(){
        const johnSmithBMI = this.mass / this.hight  2
        return johnSmithBMI;
    }
}
console.log(markMiller.calcBMI(), johnSmith.calcBMI());
console.log(${markMiller.calcBMI > johnSmith.calcBMI ? "Mark's BMI (${markMiller.calcBMI()}) is higher than John's BMI(johnSmith.calcBMI())" : "John's BMI(johnSmith.calcBMI()) is higher than mark's BMI(markMiller.calcBMI())"});
*/

//Iteration: The for Loop
//ASSIGNMENT
/*
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

/*
    for(let vote = 1; vote <= 50; vote++){
        console.log(voter number ${vote} is currently voting )
    }
    */

//LECTURE: Looping Arrays, Breaking and Continuing
/*ASSIGNMENT
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

//const percentageOfWorld2 = population => population / 7900 * 100;
//const population = [35, 50, 30, 25];
//console.log(population.length);
//const percentages = [percentageOfWorld2(population[0]), percentageOfWorld2(population[1]), percentageOfWorld2(population[2]), percentageOfWorld2(population[population.length - 1])];
//console.log(percentages);

/*
const perceentage2 = [];
for(let i = 0; i <= population.length; i++){
    perceentage2.push(percentageOfWorld2(population[i]));
}
console.log(perceentage2);
*/

//LECTURE: Looping Backwards and Loops in Loops
//ASSIGNMENT
/*
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway
*/

/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++){
     // console.log(Neighbour: ${listOfNeighbours})
for(let rep = 0; rep < listOfNeighbours[i].length; rep++){
    console.log(Neighbour: ${listOfNeighbours[i][rep]} )
}
}
/*


/*
const percentageOfWorld2 = population => population / 7900 * 100;
const population = [35, 50, 30, 25];
console.log(population.length);
const perceentage2 = [];
//console.log(percentageOfWorld2(population[0]));

for(let i = 0; i < population.length; i++){
    perceentage2.push(percentageOfWorld2(population[i]));
}
console.log(perceentage2);
*/
/*
for (let work = 1; work < 6; work++) {
    console.log(`Do work ${work}`);
    for (let rep = 1; rep < 3; rep++) {
        console.log(`solve ${rep}`);
    }
}
//*/

//LECTURE: The while Loop
//ASIGNMENT
/*
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

/*
const percentageOfWorld2 = population => population / 7900 * 100;
const population = [35, 50, 30, 25];
console.log(population.length);
const percentages = [percentageOfWorld2(population[0]), percentageOfWorld2(population[1]), percentageOfWorld2(population[2]), percentageOfWorld2(population[population.length - 1])];
console.log(percentages);
const perceentage2 = [];
/*
const perceentage2 = [];
for(let i = 0; i <= population.length; i++){
    perceentage2.push(percentageOfWorld2(population[i]));
}
console.log(perceentage2);
*/

//USING WHILE LOOP
/*
let i = 0;
while(i < population.length){
    const cent = (percentageOfWorld2(population[i]));
    perceentage2.push(cent);
    i++;
}
console.log(perceentage2);

Coding Challenge #4
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays
�
�
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

/*
const calcTip = function (bill) {
    const calc = bill >= 50 && bill <= 300 ? 15 / 100 * bill : 20 / 100 * bill;
    return calc;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    const bill = tip + bills[i];
    totals.push(bill);
}
console.log(tips);

console.log(totals);
*/

//REVISION
//ASSIGNMENT 1 FUNCTION DECLARATION
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`

}
const country = describeCountry("Ghana", 40, "Accra");
console.log(country);

//ASSIGNMENT 2 FUNCTION DECLARATION AND EXPRESSIONS
function percentageOfWorld1(country, population) {
    const percentage = population / 7900 * 100;
    return `${country} has ${population} million people, so it's about ${percentage}% of the world population `
}
const cent = percentageOfWorld1("Ghana", 40);
console.log(cent);

const percentageOfWorld2 = function (country1, population1) {
    const percentage1 = population1 / 7900 * 100;
    return `${country1} has ${population1} million people, so it's about ${percentage1}% of the world population `
}
const cent1 = percentageOfWorld2("Canada", 70);
console.log(cent1);

//ASSIGN3ENT 3 ARROW FUNCTION
const percentages3 = (country, population) => {
    const percentage = population / 7900 * 100;
    return `${country} has ${population} million people, so it's about ${percentage}% of the world population `
}
const cent2 = percentages3("U.S.A", 80);
console.log(cent2);

//ASSIGNMENT 4 CALLING FUNCTION INTO A FUNCTION
const describePopulation = function (country, population) {
    const percent = describePopulation(percentages3)
    return `${country} has ${population} million people, so it's about ${percent}% of the world population `
}
const cent3 = percentages3("U.K", 80);
console.log(cent3);
*/

//CODING CHALLENGE 1
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const averageDolphin = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);
const checkWinner = function (avgDolphin, avgKoalas) {
    if (averageDolphin >= 2 * averageKoalas) {
        console.log(`Dolphin wins (${avgDolphin} vs. ${avgKoalas})`)
    } else if (averageKoalas >= 2 * averageDolphin) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphin})`)
    } else {
        console.log(`NO win! (${avgDolphin} vs. ${avgKoalas})`)
    }
}
checkWinner(averageDolphin, averageKoalas);
*/

//ASSIGNMENT 5 INTRODUCTION TO ARRAYS
/*
const population = [35, 45, 25, 30];
const percentageOfWorld1 = population => population / 7900 * 100;
console.log(population.length);
const percentages = [percentageOfWorld1(population[0]), percentageOfWorld1(population[1]), percentageOfWorld1(population[2]), percentageOfWorld1(population[3])];
console.log(percentages);
*/

//ASSIGNMENT 6 BASIC ARRAY OPERATIONS(Methods)
/*
const neighbours = ["Nigeria", "Togo"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (neighbours.includes("Germany")) {
    console.log("It is European country")
} else {
    console.log("Probably not a central European country");
}
*/

//CODING CHALLENGE 2
/*
const calcTip = function (bill) {
    return bill >= 50 && bill < 300 ? 15 / 100 * bill : 20 / 100 * bill;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);
*/

//INTRODUCTION TO OBJECTS
//ASSIGNMENT 1
/*
const myCountry = {
    contry: "Ghana",
    capital: "Accra",
    language: "English",
    population: "35",
    neighbours: ["Nigeria", "Cote d'lvoire"]

}
console.log(myCountry);
*/

//ASSIGNMENT 2,  Dot vs. Bracket Notation
/*
const myCountry = {
    country: "Ghana",
    capital: "Accra",
    language: "English",
    population: "35",
    neighbours: ["Nigeria", "Cote d'lvoire"],
    getSummary: function () {
        return `${myCountry.country} has ${myCountry.population} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
    }
}
console.log(myCountry.getSummary());
*/
//ASSIGNMENT 3,Object Methods
/*
const myCountry = {
    country: "Ghana",
    capital: "Accra",
    language: "English",
    population: "35",
    neighbours: ["Nigeria", "Cote d'lvoire"],
    checkIsland: false,
    describe: function () {
        return `${this.country} has ${this.population} million people, ${this.neighbours.length === 0 ? "no" : "a"} neighbouring countries and a capital called ${this.capital}`
    }
}
console.log(myCountry.describe());
*/

//CODING CHAllenge 3
/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI;
    }
}
console.log(mark.calcBMI(), john.calcBMI());
if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName} BMI (${mark.BMI})  is higher than John's`);
} else {
    console.log(`${john.fullName} BMI (${john.BMI})  is higher than Mark's`);
}
*/

for (let vote = 1; vote <= 50; vote++) {
  // console.log(`Voter ${vote} is currently voting`);
}

//const percentageOfWorld2 = population => population / 7900 * 100;
//const population = [35, 50, 30, 25];
//console.log(population.length);
//const cent = [percentageOfWorld2(population[0]), percentageOfWorld2(population[1]), percentageOfWorld2(population[2]), percentageOfWorld2(population[3])];
//console.log(cent);

//const percentage2 = [];
//for (let i = 0; i <= population.length; i++) {
//percentage2.push(percentageOfWorld2(population[i]));

//}
//console.log(percentage2);
/*
let i = 0;
while (i <= population.length) {
    percentage2.push(percentageOfWorld2(population[i]));
    i++;
}
console.log(percentage2);

const calcTip = (bills) => (bills >= 50 && bills < 300) ? 15 / 100 * bills : 20 / 100 * bills;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]));
}
console.log(tips);
console.log(totals);
*/

/*
const percentageOfWorld2 = population => population / 7900 * 100;
const population = [35, 50, 30, 25];
console.log(population.length);
const cent = [percentageOfWorld2(population[0]), percentageOfWorld2(population[1]), percentageOfWorld2(population[2]), percentageOfWorld2(population[3])];
const percent = [];
console.log(cent);
for (let i = 0; i < population.length; i++) {
    //percent[i] = percentageOfWorld2(population[i]);
    percent.push(percentageOfWorld2(population[i]));
}
console.log(percent);
*/

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  //console.log(`Neighbour: ${listOfNeighbours}`);
  for (let rep = 0; rep < listOfNeighbours[i].length; rep++) {
    console.log(`Neighbours: ${listOfNeighbours[i][rep]}`);
  }
}
