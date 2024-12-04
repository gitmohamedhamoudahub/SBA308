
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
//*************************************** III. Arrays & Control flow *******************************************/


