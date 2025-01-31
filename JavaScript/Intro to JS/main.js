// alert("hello world");
/*alert is usually not recommended since it blocks
all other scripts from running on the page*/

/*JS can also run in the browser console*/

console.log("hello world");
//to write in the console using this script
/*there are multiple method attached with console
visit 'mdn js methods' for further information */

//console.error("error");
//console.warn("warning");

//VARIABLES (var, let, const)
//'var' is no longer used in js because let and const are more specific

//'let' variable can be reassigned
//'const' varaible cannot (const= constant)

//DATA TYPES//
/* -String
-Numbers
-boolean
-null
-undefined
-symbol
*/

const name = "potato";
const age = 967;
const rating= 4.5;
const isNice = true;
const x = null;
//'null' means that it is a variable but has nothing in it

const y = undefined;
let z;
//both refer to undefined

console.log(typeof rating);
/*'typeof' shows what type of data type the 
data is*/
/* the typeof for null returns 'object' as the answer
which is not true but is set as one*/

/* --STRINGS -- */

//Concatenation
/*Template strings: the new way to concatenate strings
 using ``(right beside the '1' button on keyboard) 
 it is the same as format string from python.*/

console.log(`My name is ${name} and I am ${age}.`);

const str = 'Chocolate is tasty';

console.log(str.length); 
console.log(str.toUpperCase())
//slicing (+lowercase method added)
console.log(str.substring(0, 9).toLowerCase());

//splitting
console.log(str.split(' '))

