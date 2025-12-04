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