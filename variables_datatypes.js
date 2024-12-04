//******************************************************************************************* */
//******************************* I. Variables & Datatypes ************************************/
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
    //******************************* I. Variables & Datatypes ************************************/

    