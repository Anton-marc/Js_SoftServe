//task1
// function upperCase(a){
//     let regExp = /^[A-Z]/;
//     let result = regExp.test(a);
//     if(result === true){
//         console.log("String's starts with uppercase character")
//     }else{
//         console.log("String's not starts with uppercase character ")
//     }
// }
// upperCase('regexp');
// upperCase('RegExp');
//task2
// function checkEmail(a){
//     let regExp = /./i;
//     let result = regExp.test(a);
//     console.log(result)
// }
// checkEmail('Qmail2@gmail.com');
//task3
// function textSearch(a){
//     let regExp = /d(b+)(d)/i;
//     let result = regExp.exec(a);
// console.log(result)
// }
// textSearch('cdbBdbsbz');
//task4
// let str = "Java Script"
// console.log(str.replace(/(\w+) (\w+)/i, '$2, $1')) 
//task5
// function validate(a){
//     let regExp = /^\d{4,4}-\d{4,4}-\d{4,4}-\d{4,4}$/;
//     let result = regExp.test(a);
//     console.log(result)
// }
// validate('9999-9999-9999-9999');
//task6
function checkEmail(a){
    let regExp = /^[a-z]\d/i;
    let result = regExp.test(a);
    console.log(result)
    if(result === true){
        console.log("Email is correct!")
    }else{
        console.log("Email is not correct!")
    }
}
checkEmail('Qmail2@gmail.com');
//task7 