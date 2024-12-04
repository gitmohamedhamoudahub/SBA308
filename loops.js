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

