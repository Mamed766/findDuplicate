const numbers = [1, 3, 4, 2, 2];
const findDuplicate = numbers.filter((el, i, arr) => arr.indexOf(el) !== i);
console.log(findDuplicate);
