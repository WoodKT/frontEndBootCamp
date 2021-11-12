//create ages array
const ages = [3, 9, 23, 64, 2, 8, 28];
console.log(ages);

//Programmatically subtract the value of the first element in the array from the value in the last element of the array
console.log((ages.pop()) - (ages.shift()));

//Add a new age to your array and repeat the step above
ages.push(23);
console.log((ages.pop()) - (ages.shift()));
console.log(ages);

//Use a loop to iterate through the array and calculate the average age. Print
//for (let i = 0, sum = 0; i < ages.length; sum += ages[i++]);
//console.log(sum);
function test(ages) {
    for (var i = 0, sum = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum / i;
}
console.log(test(ages));


//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//calculates average name length for names array
let total = 0;
for (let i = 0; i < names.length; i++) {
    total += names[i].length;
}
let avg = total / names.length;
console.log(avg);

//iterate through the array again and concatenate all the names together, separated by spaces, console.log
let resultString = " ";
for (let i = 0; i < names.length; i++) {
    resultString += names[i] + " ";
}
console.log(resultString);

//3.	How do you access the last element of any array? pop()
//4.	How do you access the first element of any array? shift()

//Create a new array called nameLengths
const nameLengths = [];

//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
//for (let i = 0, sum = 0; i < nameLengths.length; sum += nameLengths[i++]);
//console.log(sum);
const test1 = function(array) {
    for (var i = 0, sum = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(test1(nameLengths));


//Write a function that takes two parameters, word and n
//as arguments and returns the word concatenated to itself n number of times. 
//aas(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
const c = function(word, n) {
    let concat = [];
    for (let i = 0; i < n;)
        concat[i++] = word;
    return concat.join('');
}
console.log(c("Hello", 3));

//function that takes two parameters, firstName and lastName
//returns a full name (the full name should be the first and the last name separated by a space)
const fullName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName("Kristy", "Wood"));

//Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100
const num = [12, 17, 14, 9, 5, 33, 100];
console.log(num);

const test1B = function(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    if (sum > 100){
        return true;
    }
    return false;
}
console.log(test1B(num));

//Write a function that takes an array of numbers
//returns the average of all the elements in the array.
const test2 = function(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum/array.length;
}
console.log(test2(num));

//Write a function that takes two arrays of numbers and returns true if the average 
//of the elements in the first array is greater than the average of the elements in the second array.
const num2 = [12, 17, 14, 9, 5, 33, 200];
const avgBool = function (array1, array2) {
    let Aarray1 = test2(array1);
    let Aarray2 = test2(array2);
    return (Aarray1 > Aarray2);
}
    console.log(avgBool(num, num2));

//Write a function called willBuyDrink that takes a boolean isHotOutside
//and a number moneyInPocket, and returns true 
//if it is hot outside and if moneyInPocket is greater than 10.50.

const willBuyDrink = function (isHotOutside, moneyInPocket) {
        if (isHotOutside == true && moneyInPocket > 10.50)
            return true;
    return false;
}
console.log(willBuyDrink(true, 20));

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// Write a function noSleepForYou that takes boolean isTired and boolean tookNap
//if isTired is false return true, if tookNap is true return true, if isTired is true and tookNap is true return true
//if tookNap is true while isTired is also true still return true, we have stuff to do
const noSleepForYou = function (isTired, tookNap) {
    if (isTired == true && tookNap == true|| isTired == false || tookNap == true) 
        return true;
return false;
}
console.log(noSleepForYou(true, false));