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
