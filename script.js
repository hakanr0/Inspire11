// 1. Convert the following to arrow functions

// function multiply(num1, num2) {
//     return num1 * num2;
//   }
  
// function toCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32);
// }

const multiply = (num1, num2) => {
    return num1 * num2;
}

const toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}

/**------------------------------------------------------------------------------------------------------------------ */

// 2. This is a mistake we tend to make in JavaScript. We create a number of
// functions in a loop, and refer to an outside variable from these functions.
// All of them will end up referring to the same variable, which ends up being
// incremented to 5. Thus, callbacks[3] does not log 3. It logs 5, as do all
// functions in the array.
//
// Cleaner solution is available using ES6 new feature

// TIP: The following could be solved with one simple ES6 change. See for block scope. We want to see 3 when calling callbacks[3]

var callbacks = []
for (let i = 0; i < 5; i++) {
  callbacks.push(function() { console.log(i) })
}

callbacks[3]()

//Solution: we use let instead of var. Difference between them is in the scope of the variables they create.

/**------------------------------------------------------------------------------------------------------------------ */

//3.The following is a constant. But eventhough it is a constant, we still can change the password property.
//How we can make sure that the object is secured and can not be changed.
//ps. look for constant non-constance

const account = {
    username: "username",
    password: "password"
}

/* Const means one-time assignment.
For example: account = {
    username: "usernameChanged",
    password: "passwordChanged"
} is not possible.
However, we can change the properties since the account is const and not the properties within account variable.
So account.password = "passwordChanged" is possible.
In order to make an object truly immutable, we use a function called freeze to prevent any changes to its properties.
*/

Object.freeze(account)
account.password = "passwordChanged"
  
console.log(account.password)

/**------------------------------------------------------------------------------------------------------------------ */

/**4. Use profile destructuring to capture the first and last name of the profile */

var profile = {
    fname: 'Ryan',
    lname: 'Cromwell',
    bday: new Date('1979-01-02')
}

let { fname, lname } = profile

console.log(fname, lname)

/**------------------------------------------------------------------------------------------------------------------ */

/* 5. Use string interpolation to replace hard coded values with variables */

var postUrl = "https://google.com";
var postTitle = "Post Title";
var postImage = "https://seesparkbox.com/foundry/uploads/article_uploads/austin_04-27-17.jpg";

var html = `
    <article class="foundry--article">
        <a href="${postUrl}" title="${postTitle}" class="foundry--thumb-link">
            <img class="foundry--thumb" src="${postImage}">
        </a>
        <header class="foundry--header">
            <h1 class="foundry--title">
                <a href="${postUrl}" class="foundry--link">${postTitle}</a>
            </h1>
        </header>
    </article>
`;

console.log(html);

/* Original Html Source:
<article class="foundry--article">
  <a href="https://google.com" title="Post Title" class="foundry--thumb-link">
    <img class="foundry--thumb" src="https://seesparkbox.com/foundry/uploads/article_uploads/austin_04-27-17.jpg">
  </a>
  <header class="foundry--header">
    <h1 class="foundry--title">
      <a href="https://google.com" class="foundry--link">Post Title</a>
    </h1>
  </header>
</article>
*/

/* Use an ES6 getter to make `fullName` a calculated of first and last name, readonly property. */

class Person {
    constructor(firstname, lastname) {
        this.fname = firstname;
        this.lname = lastname;
    }

    get fullName() {
        return this.fname + " " + this.lname;
    }
}

let p1 = new Person ("Kurt", "Cobain")
console.log(p1.fullName)