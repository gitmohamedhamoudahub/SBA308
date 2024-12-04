//******************************************************************************************* */
                    //******************* SBA 308 ********************/
//******************************************************************************************* */

//******************************************************************************************* */
//I. Variables & Datatypes
//******************************************************************************************* */

//************************************* */ A. Q + A *******************************************/
{
/* 
 Q. How do we assign a value to a variable?
 A. By using assign operator = between the variable name and the value assigned
 ex: myVariable = 'My Value';

 Q.How do we change the value of a variable?
 A.if the variable is not const then we can reassign the value by using the = operator and the new value
 ex: myvariable = 'New value';

 Q.How do we assign an existing variable to a new variable?
 A.after declaring the new variable we use the = operator to assign the new variable
 ex: let newVariable = oldVariable;

 Q.Remind me, what are declare, assign, and define?
 A. declare is create new variable ex: let ye; 
    assign is give variable already declared a specific value ex: y = 4; or giving it the value of another variable
    define declaring a variable and givin it value ex: let x = 3;

 Q.What is pseudo coding and why should you do it?
 A. it is a way of code thinking for code logic or algorithm, and is not have to be runnable.  

 Q.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 A. more than 75% of the time spent in thinking about how we are doing problem than coding the solution

 */
}
//************************************* */ A. Q + A *******************************************/


//************************************* * B. Strings *******************************************/
{
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable = '';

// Assign it the value of the string "Hello World"
firstVariable += 'Hello World';

// Change the value of this variable to some number
firstVariable = 100;

// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariableto any string.
secondVariable = 'Any string';

console.log(firstVariable);
/*
Q. What is the value of firstVariable?
A. First Variable is 100

*/

/* Create a variable called yourName and set it equal to your name as a string. 
Then, write an expression that takes the string "Hello, my name is " and the variable 
yourNameso that it returns a new string with them concatenated.
 ex: Hello, my name is Jean Valjean
*/



let yourName = 'Mohamed';
let helloMessage = 'Hello, my name is';
console.log( sayHello(helloMessage,yourName) );
function sayHello(helloMessage,yourName){
    return `${helloMessage} ${yourName}`;
}

}
//************************************* * B. Strings *******************************************/

//************************************* * C. Booleans *******************************************/
{
/* 
Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
Answers should be all be valid JS syntax and not weird things that don't make sense 
but happen to print true to the console
*/

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log((a != b));
  console.log(c > d);
  console.log('Name' == 'Name');

  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  
  console.log(false == false)
  console.log(e == 'Kevin');

  // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log((a + b) ==  c); 

  // note: the answer is a simple arithmetic equation, not something "weird"
  console.log((a * a) == d); 
  console.log(48 == '48');
}
//************************************* * C. Booleans *******************************************/


//************************************* * D. The farm *******************************************/
{
/* 
 Declare a variable animal. Set it to be either "cow" or something else
 Write code that will print out "mooooo" if the it is equal to cow
 Change your code so that if the variable animal is anything other than a cow, 
 it will print "Hey! You're not a cow."
 Commit
*/
let animal = 'cow' ;
animal = 'dog';
if(animal.toUpperCase() == 'COW')
{console.log('mooooo');}
else
{console.log('Hey');}
}
//************************************* * D. The farm *******************************************/


//************************************* * E. Driver's Ed *******************************************/
{
/*
 Make a variable that holds a person's age; be semantic
 Write code that will print out "Here are the keys!", 
 if the age is 16 years or older, or, if the age is younger than 16, 
 a message should print "Sorry, you're too young."
*/
let personAge = 18;
if(personAge >= 16)
{
    console.log('Here are the keys!');
}
else
{
    console.log("Sorry, you're too young.");
}
}
//************************************* * E. Driver's Ed *******************************************/



//************************************* * II. Loops *******************************************/
//  ********************************      II. Loops    ********************************        //     
//************************************* * II. Loops *******************************************/
 // Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

//************************************* * A. The basics *******************************************/
 

// Write a loop that will print out all the numbers from 0 to 10, inclusive
console.log("****************** Loops *******************");
for(let i = 0 ; i < 11; i++)
{
    console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400
console.log("****************** all the numbers from 10 up to and including 400 *******************");
for(let i = 10 ; i <= 400; i++)
    {
        console.log(i);
    }
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
console.log("****************** every third number starting with 12 and going no higher than 4000 *******************");
for(let i = 12 ; i <= 4000; i += 3)
    {
        console.log(i);
    }



//************************************* * B. Get even *******************************************/
 
// Print out the numbers that are within the range of 1 - 100
for(let i = 1 ; i < 101; i++)
    {
        console.log(i);
    }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i = 1 ; i < 101; i++)
    {
        if(i % 2 == 0)
            {
                console.log(i + '<-- is an even number');
        }
        else
        {
            console.log(i);
        }
        
    }


//************************************* * C. Give me Five *******************************************/
 
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
for(let i = 0 ; i < 101; i++)
    {
        if(i % 5 == 0)
            { 
                console.log(`I found a ${i}. High five!`); 
            }
    }


/* 
Add to the code from above to print out "I found a number. 
 Three is a crowd" if the number is a multiple of three
 Example Output:
 I found a 3. Three is a crowd
 I found a 5. High five!
 I found a 6. Three is a crowd
 I found a 9. Three is a crowd
 I found a 10. High five!
*/
// For numbers divisible by both three and five, be sure your code prints both messages
for(let i = 0 ; i < 101; i++)
    {
       let returnMessage = '';
        if(i % 5 == 0)
            { 
                returnMessage = `High five!`; 
            }
        if(i % 3 == 0)
            { 
                returnMessage += ` Three is a crowd `; 
            }
            console.log(`I found a ${i}. ${returnMessage}`);
    }

//************************************* * C. Give me Five *******************************************/


//************************************* * D. Savings account *******************************************/
/* 
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
 Check your work! Your bank_account should have $55 in it.
 */
 let bank_account = 0;
 for(let i =1 ; i<= 10 ; i++)
 {
     bank_account += i;
 
 }
 console.log('Account Balance is --> $' + bank_account);
 /*
 You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers 
 between 1 - 100 multiplied by 2.
 Check your work! Your bank_account should have $10,100 in it.
*/
bank_account = 0;
for(let i =1 ; i<= 100 ; i++)
{
    let payment = 2 * i;
    bank_account += payment;

}
console.log('Account Balance is --> $' + bank_account);
//************************************* * D. Savings account *******************************************/

//************************************* * II. Loops *******************************************/



//************************************* * III. Arrays & Control flow *******************************************/
//*************************************** III. Arrays & Control flow *******************************************/
//************************************* * III. Arrays & Control flow *******************************************/
// A. Talk about it:
/* 
Q1.What are the things in an array called?
A. array contains index which is the key of the data and an element which holds the data values

Q2.Do Arrays guarantee those things will be in order?
A.Yes, it is ordered by index

Q3.What real-life thing could you model with an array?
A. in real life we can model array like list of student names in an excel column the index is the cell number and the value is the name of the student

*/


//************************************* * B. Easy Does It *******************************************/
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = [
    'To be or not to be, that is the question',
    'Continue planting even if the Day of Judgement arrives',
    'Life is short, learn javascript'
];
console.log(quotes);
//************************************* * B. Easy Does It *******************************************/


//************************************* * C. Accessing elements *******************************************/
/* 
 Given the following array const randomThings = [1, 10, "Hello", true]
 */
 const randomThings = [1, 10, "Hello", true];
// How do you access the 1st element in the array?
  console.log(randomThings[0]);
//Change the value of "Hello"to "World"
 randomThings[2] = 'World';
  //Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
  console.log(randomThings);
//************************************* * C. Accessing elements *******************************************/



//************************************* * D. Change values *******************************************/
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
let thirdElement = ourClass[2];
console.log(thirdElement);
// Change the value of "Github" to "Octocat"
ourClass[4] = 'Octocat';
console.log(ourClass);
// Add a new element, "Cloud City" to the array
 ourClass.push('Cloud City');
console.log(ourClass);
//************************************* * D. Change values *******************************************/



//************************************* * E. Mix It Up *******************************************/
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon');
myArray.push('Mohamed');
console.log(myArray);
// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley');
console.log(myArray);
// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). 
const myReversedArray  = myArray.reverse();
console.log(myReversedArray);
//Q.Did you mutate the array? What does mutate mean?
//A. it changed the array values and keys

//Q.Did the .reverse()method return anything?
//A. yes it returned copy of the array after the reverse
//************************************* * E. Mix It Up *******************************************/


//************************************* * F. Biggie Smalls *******************************************/
// Create a variable that contains an integer.
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
let myInteger = 190;
if(myInteger < 100)
{
    console.log('Little number');
}
else 
{
    console.log('Big number');
}
//************************************* * F. Biggie Smalls *******************************************/


//************************************* * G. Monkey in the Middle *******************************************/

// Write an if ... else if ... else statement:
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let mySecondInteger = 190;
if(mySecondInteger < 5)
{
    console.log('Little number');
}
else if(mySecondInteger > 10)
{
    console.log('Big number');
}
else
{
    console.log('monkey');
}
//************************************* * G. Monkey in the Middle *******************************************/

//************************************* * H. What's in Your Closet? *******************************************/
// 
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
/*
Q1.What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

*/
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
/*
Q2.Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
*/
let myarr = kristynsCloset.splice(6,0,'raybans');

/*
Q3.Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
*/
kristynsCloset[5] = 'stained knit hat';
console.log(kristynsCloset);
/*
Q4.Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
*/
let tomsShirt = thomsCloset[0][0];
/*
Q5.In the same way, access one item from Thom's pants array.
*/
let tomsPant = thomsCloset[1][0];
/*
Q6.Access one item from Thom's accessories array.
*/
let tomsAccessory = thomsCloset[2][0];
/*
Q7.Log a sentence about what Thom's wearing. Example: 
"Thom is looking fierce in a grey button-up, jeans and wool scarf!"
*/
console.log(`Thom is looking fierce in a ${tomsShirt} , ${tomsPant} and ${tomsAccessory} !`);
/*
Q8.Get more specific about what kind of PJs Thom's wearing this winter. 
Modify the name of his PJ pants to Footie Pajamas.
*/

thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);
//************************************* * H. What's in Your Closet? *******************************************/
//************************************* * III. Arrays & Control flow *******************************************/


//****************************************** IV. Functions ****************************************************/
//****************************************** IV. Functions ****************************************************/
//****************************************** IV. Functions ****************************************************/
//****************************************** IV. Functions ****************************************************/
//****************************************** IV. Functions ****************************************************/
//****************************************** IV. Functions ****************************************************/


//****************************************** A. printGreeting ****************************************************/
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

function printGreeting(name)
{
    return `Hello There! ${name}`;
    
}
console.log(printGreeting("Mohamed"));

// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";


function printCool(person)
{
    return `"${person} is cool"`;    
}
console.log(printCool('Mohamed'));


// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125

function calculateCube(num)
{
    return num * num * num;
}

console.log(calculateCube(5));


// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// console.log(isVowel("a"));
// => true
function isVowel(myCharacter)
{
    let myCharacterUppercase = myCharacter.toUpperCase();
    if(myCharacterUppercase.length > 1)
    {
        console.log('Error: input must be one character ony');
        return false;
    }
    else if (
        (myCharacterUppercase === 'A') || 
        (myCharacterUppercase === 'E') || 
        (myCharacterUppercase === 'I') ||
        (myCharacterUppercase === 'O') || 
        (myCharacterUppercase === 'U')
        )
        {
            //This commented line is for testing purposes
            // console.log(myCharacter + ' is Vowel');
            return true;
        }
        else
        {
            //This commented line is for testing purposes
            // console.log(myCharacter + ' is not Vowel');
            return false;
        }
    
}
console.log(isVowel('b'));
console.log(isVowel('abcd'));
console.log(isVowel('a'));
console.log(isVowel('A'));
console.log(isVowel('O'));


// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
function getTwoLengths(stringA, stringB)
{
    arrReturn = [];
    arrReturn.push(stringA.length);
    arrReturn.push(stringB.length);
    return arrReturn;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

function getMultipleLengths(arrStrings = [])
{
    arrReturn = [];
    arrStrings.forEach((element) => {arrReturn.push(element.length);})
    return arrReturn;

}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

function maxOfThree(num1, num2, num3)
{
    arrmyNums = [];
    arrmyNums.push(parseInt(num1));
    arrmyNums.push(parseInt(num2));
    arrmyNums.push(parseInt(num3));
    //console.log(arrmyNums);    
    arrmyNumsSorted =  arrmyNums.sort((a,b) => a - b);
    //console.log(arrmyNumsSorted);
    return arrmyNumsSorted[arrmyNums.length - 1];
    
}
//testing the function multible cases
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(30, 10000, 100));
console.log(maxOfThree(3000, 100, 100000));


// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

function printLongestWord(arrWords)
{
    arrSortedWords = [];
    console.log(arrWords);
    arrSortedWords = arrWords.sort((a,b)=>   b.length - a.length);;
    console.log(arrSortedWords);
    return arrSortedWords[0];
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//****************************************** IV. Functions ****************************************************/



//******************************************************************************************* */
//******************************************* Objects******************************************/
//******************************************************************************************* */

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    uName: 'Mohamed Hamouda',
    email: 'user@domain.com',
    age: 17,
    purshased: []
}
console.log(user);


// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = 'newEmail@domain.com';
user.age++;



// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = 'Some Location Here' ;  


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purshased.push('carbohydrates');
user.purshased.push('peace of mind');
user.purshased.push('Merino jodhpurs');
console.log(user.purshased[2]);



// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'New York',
    purshased: []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purshased.push('The One Ring');
user.friend.purshased.push('A latte');
console.log(user.friend.purshased[1]);


// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for(userPurchasedObjKey in user.purshased)
{
    console.log(user.purshased[userPurchasedObjKey]);
}

for(friendPurchasedObjKey in user.friend.purshased)
{
        console.log(user.friend.purshased[friendPurchasedObjKey]);
}

// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
function updateUser()
{
    user.age++;
    user.uName = user.uName.toUpperCase();

}
updateUser();
console.log(user);

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead 
//of hard-coding it to only work on our userobject,
// make it take a parameter person, and have it modify the object that is passed in as an
// argument when the function is called. Call your oldAndLoudfunction with user as the argument.

function oldAndLoud(person)
{
    person.age++;
    person.uName = person.uName.toUpperCase();
    return person;
}
console.log(oldAndLoud(user));


//******************************************* Objects******************************************/


//******************************************************************************************* */
//******************************************* Cat Combinator **********************************/
//******************************************************************************************* */
// Requirements Complete! Hungry for More?
// Cat Combinator
// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
const cat1 = {
    name: 'Mama Cat',
    breed: 'Cat Breed 1',
    age: 1,
}
//console.log the cat's age
console.log('the cat\'s age --> ' + cat1.age);
// console.log the cat's breed
console.log('the cat\'s breed --> ' + cat1.breed); 


// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {
    name: 'Papa Cat',
    breed: 'Cat Breed 1',
    age: 1.5,
}
//console.log the cat's age
console.log('the cat\'s age --> ' + cat1.age);
// console.log the cat's breed
console.log('the cat\'s breed --> ' + cat1.breed); 


// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCats that has two parameters mama, and papa. 
//The function will take two arguments -- each a cat object.

// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:

// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
// { name: "Jam", age: 45, breed: "Siamese" }
// This is to demonstrate that functions can take objects as arguments
// You could also invoke the combineCats function by writing the objects straight into the parentheses:

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
// Make it so the combineCats function will return a combination of the two incoming cats
// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:
// console.log(combineCats(cat1, cat2));
// Result:
// This is to demonstrate that a function can return an object
function combineCats(cat1 = {}, cat2 = {}) 
{
    console.log(cat1);
    console.log(cat2);
    const babyCat = {};
    babyCat.name = cat1.name + cat2.name;
    babyCat.age = 1;
    babyCat.breed = cat1.breed + ' - ' + cat2.breed;
    return babyCat;  
}
console.log(combineCats(cat1, cat2));

// 4. Cat brain bender
// If combineCats returns an object, and if combineCatstakes objects as arguments, then it stands to reason that:
// catCombinator can use itself as its own argument.
// Take a second to stew on that . . .
// What is the result of:
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .
// The above console.log is two levels deep of combineCats.
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), 
combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

