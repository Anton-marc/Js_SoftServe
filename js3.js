// // task 1
let arr = [2, 3, 4, 5];
let product = 1;
for ( let i = 0; i < arr.length; i++){
    product *= arr[i] 
}
console.log(product);
let count  = 0;
while ( count < arr.length){
    product *= arr[count];
    count++
}
console.log(product);
// // task2
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
for( let i = 0; i < arr2.length; i++ ){
    if( arr2[i] % 2 == 0 ){
        console.log( arr2[i] + " is even")
    }else{
        console.log( arr2[i] + " odd")
    }
}
// task3
let k = [];
function randArray(k) {
    let min = 1;
    let max = 500;
    let rand = Math.floor (Math.random() * (max - min + 1) + min );
    return k.push(rand);
    
}
randArray(k);
randArray(k);
randArray(k);
console.log(k);
// task 4
let a = prompt ( "Enter your first number");
let b = prompt ( "Enter your second number");

function raiseToDegree(x, y){
    x = Number(x);
    y = Number(y);
    if(Number.isInteger(x) && Number.isInteger(y)){
       let res1 =  Math.pow(x, y);
       return res1;
    }
}
raiseToDegree(a, b);
//task5
function findMin(){
    let arr = [];
    for( let i = 0; i < arguments.length; i++ ){
        arr.push(arguments[i])
        
    }
    let min = Math.min(...arr);
    return min
    }
findMin(12, 14, 4, -4, 0.2);
// task6
function  findUnique(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let x = i+1; x < arr.length; x++) {
            console.log(arr[i]);
            console.log(arr[x]);
            console.log('=======');
            if (arr[i]== arr[x]){return false}
        }
    }
    return true;
}
console.log(findUnique([1,2, 3, 4, 4]));
//task7
function last(a,b){
    for( let i = 0; i < a.length; i++){
        if(b){
            return a.slice(-b);
        }else{
            return a.pop();
        }
    }
}
console.log(last([3, 4, 10, -5]));      // -5
console.log(last([3, 4, 10, -5],2));   // [10, -5]
console.log(last([3, 4, 10, -5],8));   // [3, 4, 10, -5]
//task8

function upper(string) {
    let splits = string.split(" ");
    let stringItog = "";
  
    for (let i = 0; i < splits.length; i++) {
      let Name = splits[i];
      let First = Name.substring(0, 1).toUpperCase();
      let Leftovers = Name.substring(1, Name.length);
      stringItog += First + Leftovers + " ";
    }
    return stringItog;
  }
  
upper('i love java script');

