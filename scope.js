let bonus = 20;//global scope
function sum(first, second) {
    let result = first + second + bonus;
    // console.log(bonus);

    return result;
}

const output = sum(7, 3);
// console.log(bonus);
// console.log(output);