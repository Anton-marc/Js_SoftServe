// task 1
let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(res1); 
console.log(typeof res1); 

let res2 = Boolean(x) + "" + y; 
console.log(res2);
console.log(typeof res2); 

let res3 = Boolean(x)
console.log(res3); 
console.log(typeof res3); 

let res4 = parseFloat(Boolean(x));
console.log(res4);
console.log(typeof res4);
// task 2
let number = prompt("Choose a number")
if( number % 2 == 0 && number > 0){
    console.log("Your number is even and positive")
}
else if( number % 7 == 0 ){
    console.log("Your number is a multiple of 7")
}
else {
    console.log("This is not a number")
}
// task3
let array = [];
array.push(2, "text", true, null);
console.log(array.length);
array[4] = prompt("Enter a value");
alert(array[4]);
array.shift()
console.log(array)
// task4
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities = cities.join(" * ");
console.log(cities)
// task5
let isAdult = Number(prompt("How old are you"));
if (isAdult >= 18){
    alert("You have reached the age of majority")
}
else if (isAdult < 10){    
    alert("You are still too young")
}
else{
    alert("will miss the value")
}
// task6
let a = Number(prompt("Enter the first value"));
let b = Number(prompt("Enter the second value")); 
let c = Number(prompt("Enter the third value"));
if( a > 0 && b > 0 && c > 0 ){
    let p = (a + b + c) / 2;
    let triangleArea = Math.sqrt(p * ( p - a ) * ( p - b ) * ( p - c ));
    console.log(" triangel area is " + triangleArea.toFixed(3));
}
else{
    alert("Incorrect value")
}
if (( a * a + b * b === c * c) || ( b * b + c * c === a * a) || ( c * c + a * a === b * b)){
    console.log("This triangle is right-angled")
}
else{
    console.log("This triangle not rectangular")
}
// task 7
let date = new Date();
let currentHour = date.getHours();
if (currentHour >= 23 || currentHour <= 5){
    alert("Good night!");
}
else if ( currentHour > 5 && currentHour <= 11){
    alert("Good morning!");
}
else if ( currentHour > 11 && currentHour <= 17){
    alert("Good day!");
}
else if ( currentHour > 17 && currentHour <= 23){
    alert("Good evening!");
}