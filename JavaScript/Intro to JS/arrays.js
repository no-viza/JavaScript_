//Arrays - variables that hold multiple values

//old method
const numbers = new Array(1, 2, 3, 4, 5);
//'new __' is a constructor

const lst = ['apples', '24', 'pears', true]

//subscription
console.log(lst[2]);

//substitute
lst[0] = "bananas"; 

//append
lst.push('watermelon');

console.log(lst);

//adding items at the beginning og the array
lst.unshift('strawberries');

//removing the last item
lst.pop()

console.log(lst);

//to check if something is an array
console.log(Array.isArray(lst))

//to check index position
console.log(lst.indexOf('pears'))

//OBJECT LITERALS

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['sport', 'movies','video games'],
    address: {
        street: '50 main st',
        city: 'Toronto',
        state: 'ON'
    }
}

console.log(person);
console.log(person.lastName, person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.state)

//DESTRUCTERING

const {firstName, lastName, address:{street}} = person;
console.log(street);

person.email = 'john@gmail.com';

console.log(person);

// JSON: a format type used to send data to a server
// VERY IMPORTANT

const personJSON = JSON.stringify(person);
console.log(personJSON);