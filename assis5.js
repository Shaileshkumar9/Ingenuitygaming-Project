
document.body.style.backgroundColor='red';
var name=prompt("Enter your Name");
var a=prompt("Enter the First Number");
var b=prompt("Enter the Second Number");

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   var date = today.getFullYear()+'/'+(today.getMonth()+01)+'/'+today.getDate();
var date = "0"+today.getDate()+'/'+ ('0'+(today.getMonth()+01))+'/'+today.getFullYear();

//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date;

document.getElementById("date").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];



var add=Number(a) + Number(b);
var divide=a/b;
var mult=a*b;

var minu=a-b;

 document.getElementById("name3").innerHTML=name;
document.getElementById("add").innerHTML=add;
document.getElementById("divi").innerHTML=divide;
document.getElementById("mul").innerHTML=mult;
document.getElementById("sub").innerHTML=minu;

// document.getElementById("date").innerHTML=date2;
// document.getElementById("day").innerHTML=d