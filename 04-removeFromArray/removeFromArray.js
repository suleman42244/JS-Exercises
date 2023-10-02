const removeFromArray = function(arr, ...args){
   return arr.filter(item => !args.includes(item))
};

const originalArray = [1, 2, 3, 4, 5];
const newArray = removeFromArray(originalArray, 2, 4)

console.log(newArray)

module.exports = removeFromArray;