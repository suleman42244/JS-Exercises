const reverseString = function(str){

   let splitString = str.split("");

   let reverseArray = splitString.reverse();

   let joinArray = reverseArray.join("");

   return joinArray;
}
reverseString("Hello World")

module.exports = reverseString;