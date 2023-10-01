const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
// for(const cat of cats){
//     console.log(cat)
// }

function toUpper(string){
   return string.toUpperCase();
}
const upperCats = cats.map(toUpper);


const filtered = cats.filter((cat) => cat.startsWith("L"));

console.log(filtered)
console.log(upperCats)