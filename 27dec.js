let foodItems = ["apple", "potato", "peach" , "orange"];
console.log(foodItems);
foodItems.push("tomato" , "lichee", "grapes","mango");
foodItems.pop();

console.log(foodItems);
let color = ["yellow" , "green" , "purple" , "orange"];
let newColor = color.toString();
console.log(newColor);
let num = [2345 , 76, 98 , 65 ];
let newNum = num.toString();
console.log(newNum); 

let foodItems1 = ["apple" , "potato", "peach" , "orange"];
let color1 = ["yellow" , "green" , "purple" ,"orange" ] ;
let num1 = [2345 , 76, 98 , 65 ]; 
let newItems = foodItems.concat(color1 , num1)
console.log(newItems);
let vegetables = ["onion" , "carrot" , "brinjal" , "cucumber"]
console.log(vegetables);
vegetables.unshift();
let vegetables1 = ["onion" , "carrot" , "brinjal" , "cucumber"]
console.log(vegetables1);
vegetables.shift(vegetables1);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
let months = ["Jan", "Feb", "Mar", "Apr"];
months.splice = months.toSpliced(0, 1);
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(-1, -3);


let companies = ["bloomberg" , "microsoft", "uber", "google" ,"ibm" , "netflix"];
console.log(companies);
companies.shift();
console.log(companies);
 companies.splice(1,1 ,"Ola");
 companies.push("amazon")
console.log(companies);