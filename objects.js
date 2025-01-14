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

