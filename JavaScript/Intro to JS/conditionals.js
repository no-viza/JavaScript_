//Conditionals

const a = 20;

/*  '==' means that the ONLY value should match
    '===' means that the value AND that type should match
    '||' = OR 
    '&&' = AND */

if (a == 10){
    console.log("a is 10");
} else if (a > 10){
    console.log("a is greater than 10");
} else {
    console.log("a is less than 10");
}

// Turnery operator 
// represented by '?' -> 'then' and 'else' -> ':'

const color = a > 10 ? 'red':'blue';

console.log(color);

//SWITCHES

switch(color) {
    //if 'color' is 'red'
    case 'red':
        console.log('color is red');
        break;
    //if 'color' is 'blue'
    case 'blue':
        console.log('color is blue');
    default:
        console.log('color is neither red nor blue');
        break;
}

/* FUNCTIONS */

function addNum(num1, num2){
    return num1 + num2;
}

console.log(addNum(5,7));
//if the parameters were not provided: NaN (Not a Number)

//Arrow Function
//if the function is small and has no assignment in it
// a shorter way to write functions.
const subNum = (num3, num4) => num3 - num4;

console.log(subNum(9, 3));

// constructor function (constFun) = User defined function
// 'this.' in a constFun = self.

/* prototyping- making variable/methods private:

UDF(name).prototype.subfunction(name) = function() {
    return this.subfunction(name);
} 
    
NOT TO BE DONE IN CLASSES*/
