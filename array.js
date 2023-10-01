const cars = new Array("Saab", "Volvo", "BMW")
// let car = cars[0]
// cars[0] = "Opel";
// console.log(car)
// console.log(cars)

const fruits = ["Banana", "Orange", "Apple", "Mango"]
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("demo").innerHTML = cars;

const person = ["John", "Doe", 46]
const person1 = {
    firstName: "john",
    lastName: "Doe",
    age: 46
}
// console.log(person1.firstName)

let length = fruits.length;
let fruit = fruits[0]
let last = fruits[fruits.length - 1];

for(const i of fruits){
    console.log(i)
}
// console.log(last)
// console.log(fruit)
// console.log(length)