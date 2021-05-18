// task2
console.log("Fesenko");
// task3
let x;
let y;
x = 10;
y = 20;
alert(x);
alert(y);
x = y;
alert(x);
alert(y);
//task4
let ob = {
    String: "text",
    Number: 1,
    Boolean: true,
    Undefined: undefined,
    Null: null,
}
// task5
let isAdult = confirm("Are your age 18 years old?");
console.log(isAdult);
// task6
let yourName;
let lastName;
let group;
let birthday;

yourName = "Bob";
lastName = "Pitt";
group = 22;
birthday = 2001;

let maritalStatus = false;
console.log(typeof yourName, typeof lastName, typeof group, typeof  birthday, typeof maritalStatus);

let b = null;
let a ; 
console.log(typeof b, typeof a)
// task7
let name2 = prompt("Enter your name");
let email = prompt("Enter your email");
let password = prompt("Enter your password");
alert("Dear " + name2 + ", your email is " + email + ", your password is " + password );
// task8
let secondsInMin = 60;
let minInHour = 60;
let secInHour = secondsInMin * minInHour;
let hoursInDay = 24;
let secondsInDay = secInHour * hoursInDay;
let dayInMounth = 30;
let secondsInMounth = dayInMounth * secondsInDay;
alert ("Seconds in hour are " + secInHour + ", seconds in day are " + secondsInDay + ", seconds in mounth are " + secondsInMounth)


