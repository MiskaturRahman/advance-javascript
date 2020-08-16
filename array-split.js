const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 4);//picks up selected index start to stop items but main array remains fine

const removed = nums.splice(2, 4, 55, 54);//changes the main array., remove from starting index to desired numbers

console.log(removed);
// console.log(part);
console.log(nums);

const together = nums.join(" hello ");
console.log(together);