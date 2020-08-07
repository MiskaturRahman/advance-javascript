const students = [
    { id: 21, name: 'omar' },
    { id: 31, name: 'asad' },
    { id: 43, name: 'faruk' },
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 33);
console.log(bigger);