// let person = {
//     name: "Ali",
//     age: 25
//   };
//  console.log(age);

// alert("heelo everyone");
// alert("learn progeramming languages");
let x = 5;
x = 9
document.write(x + x);
console.log(typeof(x));

var y = null;
document.write(y);
 const a = 123455n;
 document.write(typeof(a));




//  {
//     let m = "maryam";

//  }
//  console.log(m);  
//  its not write way it will show an undfined error
//for fixing it add statement in the {}
//but in var it will work coz it is global
{


 var m = "maryam";}

document.write(m);

let j = [  null , "value-wtg", 'islamic' , 1234];
document.write(j);


// var k = {
//     name :"fatima",
//     classes : 5,
//     school :"IIUI",
//      present : true,
//      values : [ "value-wtg", 'islamic' , 1234 ]
// };
// console.log(k.name +" zahra " + k.values[2] )


let k = {
    name :"fatima",
    classes : 5,
    school :"IIUI",
     present : true,
     values : [ "value-wtg", 'islamic' , 1234 ]
}; 
console.log(k.name +" zahra " + k.values[2])

//ARRAY METHOD
//1-arry.length
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// document.write("Number of fruits: " + size);
// const profile={
//     username:"maryam",
//     is_follow:false,
//     following:234,
//     bio:"a web developer",
// }

// var opera={
//     ary=["pakista", 1234, true, null , "done"]
// }
// document.write(opera.at(2));



//length--count the number of element
var arr=["apple" , 1234, null , true , "pink"]
console.log(arr.length);

//tostring--convert all datatypes into string [in double quotes"__"]
var arr=["apple" , 1234, null , true , "pink"]
console.log(arr.toString());

//at---indexing or[]  --same function
var arr=["apple" , 1234, null , true , "pink"]
console.log(arr.at(3));

//join --replce jointing element like comma etc
var arr=["apple" , 1234, null , true , "pink"]
console.log(arr.join("$"));

//pop--remove last element
var arr=["apple" , 1234, null , true , "pink"]
arr.pop()
console.log(arr);

//push--add element in the end of the arry
var arr=["apple" , 1234, null , true , "pink"]
arr.push("pakistan")
console.log(arr);

//shift--remove first element
var arr=["apple" , 1234, null , true , "pink"]
arr.shift()
console.log(arr);

//unshift-- add element in the start of array
var arr=["apple" , 1234, null , true , "pink"]
arr.unshift("pakistan")
console.log(arr);

//delete-- shows empty on that place......... or  cosele.log  to that objct--undefined
//TIP-- us pop or push instead of delete ---will not show empty 
var arr=["apple" , 1234, "grapes" , true , "pink"]
 delete arr[2]
console.log(arr[2]);

//concat--2 arrays can add {merge}
var arr1=["apple" , 1234, null , true , "pink"]
var arr2=["apple" , 1234, null , true , "pink"]
var arr3=arr1.concat(arr2);
console.log(arr3);
















