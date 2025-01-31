//Loops

const todos = [
    {
        id: 1,
        text: 'wash dishes',
        isCompleted: true 
    },
    {
        id: 2,
        text: 'meeting with friends',
        isCompleted: true
    },
    {
        id: 3,
        text: 'do assignment',
        isCompleted: false
    }
]

//FOR LOOPS
console.log(todos[1].text)

for(let i = 0; i < 6; i++){
    console.log(`loop Num: ${i}`)
}

//WHILE LOOPS
let i = 0;
while(i < 6) {
    console.log(`Wloop Num: ${i}`);
    i++
}

//LOOPING THROUGH ARRAYS

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text)
}

// a better way to write a for loop
for(let todo of todos){
    console.log(todo.id);
    console.log(todo.text);   
}

// High order array methods: to do any kind of iteration on arrays
// all these methods take in a FUNCTION as their argument

//1. forEach
todos.forEach(function(todo) {
    console.log(todo.isCompleted);
});

//2. map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

//3. filter

// we can use multiple methods in one
const todoCom = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCom);