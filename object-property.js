
const students = [
    {id: 21, name: "Kallu"},
    {id: 24, name: "Fallu"},
    {id: 32, name: "Dallu"},
    {id: 73, name: "Challu"}
];

const names = students.map( s => s.name);
const ids = students.map (s => s.id);

console.log(names);

const bigger = students.filter(s=> s.id>22);
console.log(bigger);

const biggerOne = students.find(s => s.id>25);
console.log(biggerOne);