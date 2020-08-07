const numbers = [2, 3, 4, 5, 6, 7, 8];

const result = numbers.map(function (element) {
    return element * element;
})
console.log(result);



const result = numbers.map(x => x * x);
console.log(result);




//filter
const bigger = numbers.filter(x => x < 5);
console.log(bigger);




//find
const isThere = numbers.find(x => x > 5);
console.log(isThere);