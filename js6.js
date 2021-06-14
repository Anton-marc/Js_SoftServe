//task1
document.getElementById("test").innerHTML = "last";
document.querySelector("#test").innerHTML = "last2";
//task2
document.getElementsByTagName("img")[0].setAttribute("src","cat.jpg.");
alert(document.getElementsByTagName("img")[0])
//task3
let x = document.querySelectorAll("div p");
for(let i = 0; i < x.length; i++){
    console.log("Selector text " + i + ": " + x[i].innerText) 
    
}
task4
alert()
//task5
 document.getElementsByTagName("h1")[0].setAttribute("style","background:#90ee90;font-weight:bold;");
 document.querySelectorAll("#myDiv p")[0].setAttribute("style","font-weight:600;");
 document.querySelectorAll("#myDiv p")[1].setAttribute("style","color:red;");
 document.querySelectorAll("#myDiv p")[2].setAttribute("style","text-decoration:underline;");
 document.querySelectorAll("#myDiv p")[3].setAttribute("style","font-style:italic;");
 document.getElementById("myList").setAttribute("style","display:flex;list-style:none;");
 document.getElementsByTagName("span")[0].remove();

//task6
let firstText = prompt()
let lastText = prompt()
document.getElementById('input1').value = firstText;
document.getElementById('input2').value = lastText ;

let swap = document.getElementById("input1").value;
document.getElementById("input1").value = document.getElementById("input2").value;
document.getElementById("input2").value = swap;
//task7 
let d = document.createElement('main');
d.className = "mainClass check item";
document.body.appendChild(d);
let z = document.createElement('div');
z.id = "myDiv";
document.getElementsByTagName("main")[0].appendChild(z);
let somet  = document.createElement('p');
let textnode = document.createTextNode("First paragraph");
somet.appendChild(textnode);
document.querySelector("#myDiv").appendChild(somet);

