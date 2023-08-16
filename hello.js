//console.log('Hello from Node.js');

// Create text file using NodeJS --->
/* const fs = require('fs');
 fs.writeFileSync('hello.txt', 'Hello World Node.js'); */

// use of function in JS
 /*var name = 'Max';
var age = 26;
var hashobbies = true;

function summerizeUser(userName, userAge, userHasHobby) {
    return ('Name is' + 
    userName + 
    ', age is' +
    userAge + 
    'and the user has hobbies: ' + 
    userHasHobby
    );
}
console.log(name, age, hashobbies);    */


// Difference between let & Const :
/* const name = 'Max';
let age = 26;
let hashobbies = true;

age = 30;
function summerizeUser(userName, userAge, userHasHobby) {
    return ('Name is' + 
    userName + 
    ', age is' +
    userAge + 
    'and the user has hobbies: ' + 
    userHasHobby
    );
}
console.log(name, age, hashobbies);  */


// Arrow Function in JS 
/* const product = (num1, num2) => num1 * num2;
console.log(product(3,5));

const proRandom = () => 3 * 5;
console.log(proRandom()); */

// Student Object create :
/* const student = {
    name: 'Max',
    age: 26,
    greet() {
        console.log('Hi I am, ' + this.name);
    }
};
student.greet(); */

// Array Map : trasformation
/*const originalArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
const transformedArray = originalArray.map(item => {
  if (item.trim() === '') {
    return 'empty string';
  } else {
    return item;
  }
});
console.log(transformedArray); */


// Add element into exiating array
/*const fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
fruits.push('Banana');
console.log(fruits);*/

// const obj1 = {'key1': 1}
// const obj2 = { ...obj1}
// if(obj2 === obj1){
// console.log('same objects')
// }
// else{
// console.log('different objects')
// }

// const obj1 = {'key1': 1 , 'key2' : 2}
// const obj2 = { ...obj1, key1: 1000}
// console.log(obj1)
// console.log(obj2)

// Destruction :
/*const person = {
    name: 'Max',
    age: 26,
    greet() {
        console.log('Hi I am, ' + this.name);
    }
};
const printName = ({ name }) => {
    console.log(name);
}
printName(person);

const { name,age } = person;
console.log(name,age);*/

// use of promise and async
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  
  async function printLetters() {
    await delay(1000);
    console.log('a');
  
    await delay(1000);
    console.log('b');
  
    await delay(1000);
    console.log('c');
  
    await delay(1000);
    console.log('d');
  
    await delay(1000);
    console.log('e');
  }
  
  printLetters();
  