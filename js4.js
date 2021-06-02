// task1
function resultArea (){
  let firstValue =  Number(prompt("Enter width", + ""));
  let secondValue =  Number(prompt("Enter height", + ""));   
  let area;
    if (isNaN(firstValue)){
        throw new Error("Not a number");
    }else if (isNaN(secondValue)){
        throw new Error("Not a number too");
    }else if(!isNaN(firstValue)) {
         area = firstValue *  secondValue;
    }
    return area;
    

}

try{
    resultArea ();
    
}
catch (exception){
    console.log(exception.name);
    console.log(exception.messega);
    console.log(exception.stack);    
}

//task2
let age = Number(prompt("Enter your age", + ""));
function checkAge(){
    if(age === null){
        throw new Error("The field is empty! Please enter your age");
    }else if(isNaN(age)){
        throw new Error("You entered not a number");
    }else if(age < 14){
        throw new Error("Your age is less than 14");
    }

}
console.log(age)
try{
      checkAge (age);

}
catch (exception){
    console.log(exception.name);
    console.log(exception.messega);
    console.log(exception.stack);    
}
// task3
