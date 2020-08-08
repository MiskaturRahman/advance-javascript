const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);//picks up selected items but main array remains fine

const removed = nums.splice(2, 4, 55, 54);//changes the main array.. we can a 
console.log(removed);
console.log(nums);