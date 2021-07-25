/* 
hoisting in javascript means that javascript creates the global execution context. 
The global execution  has two phases: Creation and execution.
*/
let x = 5,
    y = 10;

function add(x, y) {
    return x + y;
}

let result = add(x, y);
console.log(result);