//task1
// let newWindow = window.open("", "", "width = 300,height = 300");
// setTimeout (function(){
//     newWindow.resizeTo(500, 500);
// }, 2000);
// setTimeout (function(){
//     newWindow.moveTo(200, 200);
// }, 4000);
// setTimeout (function(){
//     newWindow.close();
// }, 6000);
//task2
// function changeCSS(){
//     text.style.color = "orange";
//     text.style.fontSize = "20pt"
//     text.style.fontFamily = "Comic Sans Ms"
// }
//task3
// function setBackground(color){
//     document.body.style.backgroundColor = color;
// }
//task4
// document.getElementById("btn").addEventListener("click", deleteName);
//     function deleteName()
//     {
//         let x = document.getElementById("nameSet");
//         x.remove(x.selectedIndex);
//     }
//task5
// let x = document.getElementById("liveButton");
// x.addEventListener("mouseover", mouseOverFunction);
// x.addEventListener("click", mouseClickFunction);
// x.addEventListener("mouseout", mouseOutFunction);
// function mouseOverFunction(){
//     document.getElementById("myId").innerHTML += "Mouse on me!<br>"
// }
// function mouseClickFunction(){
//     document.getElementById("myId").innerHTML += "I was pressed!<br>"
// }
// function mouseOutFunction(){
//     document.getElementById("myId").innerHTML += "Mouse is not on me!<br>"
// }
//task6
// function displayWindowSize(){
//     let w = window.innerWidth;
//     let h = window.innerHeight;
//     let size = "Width: " + w + ", " + "Height: " + h;
//     document.getElementById("result").innerHTML = size
// }
// window.addEventListener("resize", displayWindowSize)
//task7 
const cityArr = {
    'ger': ['Berlin', 'Hamburg', 'Dortmund', 'Frankfurt'],
    'usa': ['New-York', 'Washington', 'Boston', 'Chikago'],
    'ukr': ['Lviv', 'Kyiv', 'Odessa', 'Dnipro']
};

let gerArray = cityArr["ger"];
let usaArray = cityArr["usa"];
let ukrArray = cityArr["ukr"];


let cities = document.getElementById("cities");
document.getElementById("country").addEventListener("click", selectCountry);
    function selectCountry()
    {
        let value = document.getElementById("country").value;
        switch (value){
            case "ukr":
                ukrArray.forEach((e) => {
                    let 
                })
                break;
            case "ger":
                console.log("Germany")
                break;
            case "usa":
                console.log("Usa");
                break;
        }
    }

