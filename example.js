let variable1 = 1;
const variable2 = 5;

console.log(variable1, variable2);

variable1 = "Ola"; // Change variable type
console.log(variable1, variable2);

const array = [1, 2, 3]; // array address is const

array.push(4);
console.log(array);
console.log(array.length);

array.forEach(value => {
    console.log("Value: " + value);
});

const array2 = array.concat(5);
console.log(array);
console.log(array2);

const multiple2 = array.map(value => value * 2); // maps every element to another, based on some function
console.log(multiple2);

// destructuring
const [first, second, ...rest] = array;
console.log(first);
console.log(second);
console.log(rest);

// object
const object1 = {
    name: "Paulo",
    age: 23,
};
console.log(object1);
console.log(object1.name);

object1.address = "123";
object1['secret number'] = 1234; // space bar
console.log(object1);

// Functions
const sum = (a,b) => {
    return a + b;
}
const result = sum(1,2);
console.log(result);


const print = value => { // one parameter
    console.log(value);
}
print(1);
