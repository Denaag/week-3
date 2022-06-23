// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in the 
//last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] 
//is not allowed). 
//Print the result to the console.
console.log(ages[ages.length - 1] - ages[0]);

//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(33);
console.log(ages[ages.length - 1] - ages[0])

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.
function getAverage(ages) {
    let avg = 0;
    for (i = 0; i < ages.length; i++) {
        avg += ages[i];
    }
    return avg/ages.length;
}
console.log(getAverage(ages));

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

//Use a loop to iterate through the array and calculate the average number of letters per name. 
//Print the result to the console.
function getNameAverage(names) {
    let avg = 0;
    for (i = 0; i < names.length; i++) {
        avg += names[i].length;
    }
    return avg/names.length;
}
console.log(getNameAverage(names))

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and 
//print the result to the console.
function namesTogether(names) {
    for (i = 0; i <= names.length; i++) {
        return names.join(", ");
    }
}
console.log(namesTogether(names));

//How do you access the last element of any array?
console.log(names[names.length - 1]) //Do this by entering into array first, and request it's lenth minus 1 to produce "bob" or whatever is at the end of the array.

//How do you access the first element of any array?
console.log(names[i]) //Do this by entering array name and index as i for 0 element

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add 
//the length of each name to the nameLengths array.
//For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

function createNumericArray(namesArray) {
    let arrayLength = [];
    for (i = 0; i < namesArray.length; i++) {
        arrayLength.push(namesArray[i].length);
    }
    return arrayLength;
}

nameLengths = createNumericArray(namesArray)
console.log(nameLengths);

//let lengths = namesArray.map(function (element) {
    //return element.length;
//})
//console.log(lengths)

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//Print the result to the console.
function nameLengthsSum(nameLengths) {
    let sum = 0;
    for (i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i]
    }
    return sum;
}
console.log(nameLengthsSum(nameLengths))

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of 
//times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatWord (word, n) {
    let z = "";
    for (i = 0; i < n; i++) {
        z += word;
    }
   console.log(word.repeat(n));
}
repeatWord("Hello", 3);


//Write a function that takes two parameters, firstName and lastName, and returns a full name
//(the full name should be the first and the last name separated by a space).
function createFullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}
createFullName("Sally", "Blume")

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array 
//is greater than 100.
let newArray = [1, 25, 25, 60];
console.log("here is a string", newArray);
function arraySum(newArray) {
    let arraySum = 0;
    for (let i = 0; i < newArray.length; i++) {
        arraySum += newArray[i];
        console.log(arraySum, "don't place log within for loop here - will each index to the next index");
    }
    console.log(arraySum, "proper console.log placement to only get the total of array in log")
        if (arraySum > 100){
            console.log("true")
            return true;
        } else {
            console.log("false");
            return false;
        }
}
console.log("this returns my function", arraySum(newArray));

//Write a (a step) function that takes an array of numbers and (a step) returns the (a step to take) average of all the elements in the array.
array1 = [25, 16, 33, 216, 135, 17]; //create an array
function arrayAverage(array1) { //create function, you can add array1 or don't have to.
    arraySum = 0;
    for (i = 0; i < array1.length; i++){
        //below gives me the sum of an array
        arraySum += array1[i]; //DON'T add console.log (note in line 134) & don't add /array1.length for avg to this line because it still produces sum of array1 ONLY.
        //console.log(arraySum / array1.length) //AGAIN, if you place console within loop, it will produce average and of each index after it sums previous iteration.
    }
    console.log(arraySum / array1.length);//proper placement of for console.log

}
arrayAverage(array1);//you have to call on the function for it work/run/console.log line 136. W/O it, it won't log ANYTHING.


//Write a (a step) function that (at step) takes two arrays of numbers and (a step) returns true (a step) if the average of the elements in the first 
//array is greater than the average of the elements in the second array.
let arrayFirst = [318, 22, 18, 100, 78]//step completed
let arraySecond = [25, 26, 113, 15, 316]//step completed

function doubleAverage(arrayFirst, arraySecond){//step completed
    let array1stSum = 0;
    let arraySecondSum = 0;
    for (let i = 0; i < arrayFirst.length; i++){
        array1stSum += arrayFirst[i];//gives me the sum of an array
    }
    console.log("this is the arrayFirst sum", array1stSum)
    console.log("this is the arrayFirst avg", array1stSum/arrayFirst.length)//gives me the avg of arrayFirst
        for (let j = 0; j < arraySecond.length; j++) {
            arraySecondSum += arraySecond[j];//gives me the sum of an array
        }
        console.log("this is the arraySecond sum", arraySecondSum)
        console.log("this is the arraySecond avg", arraySecondSum/arraySecond.length)//gives me the avg of arraySecond
    if ((array1stSum/arrayFirst.length) > (arraySecondSum/arraySecond.length)){
        console.log("True");
        return true;//step completed
    }
    else {
        console.log("False");
        return false;//step completed
    }


}
doubleAverage(arrayFirst, arraySecond);

//Write a (a step) function called willBuyDrink that (a step) takes a boolean isHotOutside, and (a step) a number moneyInPocket, and (a step) returns true (a step) if it 
//is hot outside and (a step) if moneyInPocket is greater than 10.50.
let isHotOutside = false;
let moneyInPocket = 11.00;


function willBuyDrink(isHotOutside, moneyInPocket){
    if (!isHotOutside && moneyInPocket > 10.50){ //Don't make isHotOutside equal to false/true - everything in if is true - if true, then. !isHotOutside makes it opposite of the variable I set it as which is false and now becomes true.
        console.log("I can afford it, let's buy a drink");
        return true;
    }
    else {
        console.log("I cannot afford it today, sorry.")
        return false;
    }
}
willBuyDrink(isHotOutside, moneyInPocket);


//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//problem to solve - first get the average height of team based on an array
//called playerHeights (in inches) and return true if they are taller than 66 - then they can play ball.

let playerHeights = [60, 58, 66, 72, 84]//creating my array of play heights
let playerOne = 66;//your player's height

function canPlayBall(playerHeights){//creating my action of players that can ball / wanted to create a height requirement to be on the team.
    playerHeightsSum = 0
    for (i = 0; i < playerHeights.length; i++){
        playerHeightsSum += playerHeights[i];//provides sum of player heights in total based on inches
    }
    console.log(playerHeightsSum/playerHeights.length)//this gives me the avg height of my team of 5
        if (playerOne >= 66){//if the player is 66 inches or taller, then they can play ball.
            console.log("Welcome to the team!");
            return true;
        }
        else {//if they are shorter than 66 than, they aren't tall enough.
            console.log("I'm sorry, maybe next year.");
        }
}
canPlayBall(playerHeights)//call on a function