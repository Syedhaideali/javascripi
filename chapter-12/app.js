var age=30
if (age>18) {
    console.log("true")
    document.write("<h1>true </h1>")
}
else {
  console.log("false")
}

var maths=+prompt("write your maths number")
var english = +prompt("write your english number")
var urdu=+prompt("write your urdu number")
var result= english + urdu + maths

if(result>150) {
   console.log("You are passed");
 document.write("<h1> You are passed </h1>")
}
else {
    console.log("fail consider");
document.write("<h1> fail consider</h1>")
}


// comparison operators
var  marks= 300 
if (marks!== "300") {
  console.log ("satisfied")
    document.write("<h1> Satisfied</h1>")
}
else {
    console.log("not satisfied")
}
 var  marks= 300 
 if (marks == "400") {
 console.log ("satisfied")
     }
else {
    console.log("not satisfied")
     document.write("<h1> Not Satisfied</h1>")
 }
var i1 = -1
var i2= 2
var result= i1+i2

if(result >5) {
    console.log("try again")
}
else{
    console.log("yes")
    document.write("<h1> yes</h1>")
}