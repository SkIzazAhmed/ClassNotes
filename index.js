const name = "Izaz";

let age = 18;
var add = "Bengaluru";
// console.log(name, age, add);
// add = "Mumbai";
age=19;
let a=true;
let abb=`abbu
nehi 
manenge`
// console.log(name, age, add);
// console.error("This is an error message");
// console.warn("This is a warning message");
// console.info("hiiiii");
// console.debug("heeeeeee");
console.log(`Hello ${age}`)//3 ways to define string " " , ' ' , and with ` `
//like in python f string we aslo use ${} to insert an variable

let ag=`age ${a}`;
console.log(typeof(`age ${a}`));


console.log(abb);


if(ag>10){
    console.log("Heehehhehehh");
}
else{
    console.log("Hooooooooo");
}
age=`10`;
if(age==10){
    console.log("Hiii")
}
/* False - True
   NaN - Is a Number
   Undefined - anyvalue
   null - Any value
   Empty String - Any string
   0 - any number
*/
let ab="";
console.log(Boolean(ab));

ab="ab";
console.log(Boolean(ab));
/*
4 types of oparator
Arithmatic     ->       + - * / % ++ --
comparison     ->       > = <
Locgical       ->       And Or Not
Assignment     ->       =
*/

let agee='aya';
let ac=agee+9; // Concatination of anything with string will result in string
console.log(ac);
console.log(typeof(ac)); 
let ad= agee * 9; // string having string with number
console.log(ad);
let ae= age*9; // string having number with number
console.log(ae);
/* 2 phase Memory Creation  and  Code Executaion 
incase of Var We can use it before init and it will through Undefined which will affect the webpage
incase of let we can not use it before init and if we still use it it will through reference error and the area above the var init is called Dead zone*/
// Null == Undefined is true
// NaN == NaN is False
// variable.toFormat(number of decimal places)
// === checks datatype as well
// == only checks value
// Null === Undefined is false
function abc(){
    let a=`aaaaaaaaggggggggggggg`
    let b=`bbbbbbbbeeeeee lllllll tttttt`
    console.log(a+b);
}
let count =0
for(count =0;count<=10;count++){
abc()
}
function fib(a,b){ // Function description 
    // console.log(a+b);
    return (a+b);
}
const arr=[]; // array declaration
arr.push(0);
// console.log(arr);
let x=0;
let y=1;
// console.log(x);
for (count=2;count<=10;count++){ // array pushing
    let temp=fib(x,y);
    x=y;
    y=temp;
    arr.push(temp);
}
console.log(arr); // array printing same as Java
for (count=0;count<10;count++){
    console.log(arr[count])
}
// function need to have a parenthesis
// length is a property 
arr.pop();
console.log(arr); // popping the last element It is based on LIFO like stack
// strings are immutable
// stack and heap in ram storage
// stack stores primitive data type 
// heap stores non primitive data type
// heap is dynamic stack is static
// all primitive data type is pass by value
// all non-reference datat type is pass by refetence
// .toString(base) wil convert it to base 2 and will be in binary
// type of array is OBJ
// let a=["hi","hello"];
// let o=a;
//                           - - - > ["Hi","Hello"]
//                      - -   - -
//      pointer | o  -   - -  
//      pointer | a  - -  
//          Stack                       heap
// console.log(Number(null)) --> 0
// console.log(Number(undefined)) --> NaN
/*
let b=[1]
let c=[1]
console.log(b==c) --> False
it will be false as we are comparing Objects and objects work on reference and one reference is different that other 
*/
/*
let c=[1]
let d=c
console.log(d==c) --> True
It will be true as we are comparing both references and both are same
*/
/*
let a=[1,2,3,4]
a.unshift(100)
console.log(a) -->[100,1,2,3,4]
unshift add it to the front 
*/
/*
const car={
color:"Red";
make:"Toyota";
Year:2023;
start: function(){
console.log("This car has started");
};
drive: function(){
console.log("Car is Driving");
}
} 
*/
function star(){
    console.log("This car has started");
}
function dri(){
    console.log("This car is Driving");
}
const car={
color:"Red",
make:"Toyota",
Year:2023,
start: star(),
drive: dri(),
repairing:function(who){
    console.log("at "+who);
}
} 
console.log(car.color);
car.type="manual";
console.log(car.type);
delete car.type;
console.log(car);
car.repairing("Mech");
car["repairing"]("Mech");
// strict js and loose js
//"use strict"; will toggle the js into strict js otherwise it will always be loose Js
// we can add/reasign the value with car.key='value' or with car['key'] = 'value'
//if we accesss an key which is still not defined in the obj will result in undefined
//in arr the square bracks[] will consider any value with in [] as index
//DOM ---> Document object model
// DOM lets us update the website dynamically
//DOM also uses class and id
//...parameters within func defination defines a function that takes multiple inputs and store them as an array
// the array name would be the parameter name that we pass through func defination
/* 
DOM Selectors are:-
getElementById
getElementByClassName
getElementByTagName
querySelector
querySelectorAll
*/
// Js Is OOP Language which means that any extar code is treated as object
console.log(document.getElementsByClassName("Title"))
console.log(document.getElementsByTagName("p"))
console.log(document.querySelector(".Title"))
document.getElementsByClassName("Title").innerHTML="<b>Happy</b>";//The block of code inside the class Title
// document.getElementsByClassName("Title").outerHTML="<b>Happy</b>"; the block of code we are serching for
//if the js is dependent on the body then we need to declare it in Body
document.getElementById("name").addEventListener("mousehover",function(){
    console.log("Heyyyy")
});
