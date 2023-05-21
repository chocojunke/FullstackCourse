/*let variable1 = 1;
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
print(1);*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// length
console.log(numbers.length);

// concat
numbers = numbers.concat([1, 2, 3]);

// every
console.log(numbers.every((element) => { return element < 10; }));

// filter
numbers.filter((element) => {return element % 2 === 0;});

// flat

// forEach
numbers.forEach((element) => {console.log(element);});

// indexOf
console.log(numbers.indexOf(9));
console.log(numbers.indexOf(10)); // -1

// lastIndexOf
console.log(numbers.indexOf(1)); // 0
console.log(numbers.lastIndexOf(1)); // 9

// map
console.log(numbers.map(element => element ** 2));

// reduce
console.log(numbers.reduce((sum, element) => sum + element, 0));

let letters =  ["a", "b", "c", "d"];
console.log(letters.reduce((total,letter) => total + letter, "")); // join
 
// reverse -> reverses own array
numbers.reverse(); // mutates same array
// toReversed -> return reversed array without mutating
console.log(numbers);

// slice
console.log(numbers.slice(3, 12));
console.log(numbers);

// some
console.log(numbers.some(element => element % 2 === 0));

// sort
console.log(numbers.sort((a, b) => a - b));

// splice(start, deleteCount, item1, item2, itemN)
numbers.splice(0, 6, 1, 2, 3);
console.log(numbers);