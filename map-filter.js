// map-filter.js

const numbers = [3, 4, 5, 6, 7, 8, 9, 10];
// const output = [];

// const result = numbers.map(function(element){
    
//     console.log(element);
//     return element * element;

// })

// console.log(result);

// const result = numbers.map(x=>x*x);
// console.log(result);

const result = numbers.filter(x => x%2==0);
console.log(result);