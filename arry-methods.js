//length--count the number of element
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
console.log(arr.length);

//tostring--convert all datatypes into string [in double quotes"__"]
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
console.log(arr.toString());

//at---indexing or[]  --same function
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
console.log(arr.at(3));

//join --replce jointing element like comma etc
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
console.log(arr.join("$"));

//pop--remove last element
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
arr.pop()
console.log(arr);

//push--add element in the end of the arry
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
arr.push("pakistan")
console.log(arr);

//shift--remove first element
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
arr.shift()
console.log(arr);

//unshift-- add element in the start of array
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
arr.unshift("pakistan")
console.log(arr);

//delete-- shows empty on that place......... or  cosele.log[]  to that objct--undefined
//TIP-- us pop or push instead of delete ---will not show empty 
var arr=["pakistan", "india", "itly", "iran" , "iraq"]
 delete arr[2]
console.log(arr[2]);

//concat--2 arrays can add {merge}
var arr1=["pakistan", "india", "itly", "iran" , "iraq"]
var arr2=["yaman", "japan", "saudi arabia" ,"bangladesh" ,"turkey"]
var arr3=arr1.concat(arr2);
console.log(arr3);

//copy within--- first value--jo element replace ho,   2nd value-jis alement sy replce ho
var arr=["pakistan", "india", "itly", "iran" , "iraq" , "japan"]
var new_arr=arr.copyWithin(1,4)
console.log(new_arr);

//flat-- add different sab arrays in one arry
var arr=[ ["pakistan", "india", "itly",],["pakistan", "india", "itly",],["pakistan", "india", "itly",]]
var new_arr=arr.flat()
console.log(new_arr);

//splice--1-array remove krna start krna--new element add also replce    2-number of element remove
// existing array change hoti
var arr=["pakistan", "india", "itly", "iran" , "iraq" , "japan"]
var arr = arr.splice(1, 2 ,"fruit");
console.log(arr);

//tosplice---same as splice ..but not change existing array
var arr=["pakistan", "india", "itly", "iran" , "iraq" , "japan"]
var newarr = arr.toSpliced(1, 3, "maryam");
console.log(newarr);


//slice--no of element remove from first..no index just value how much element u want to remove
var arr=["pakistan", "india", "itly", "iran" , "iraq" , "japan"]
var newarr = arr.slice(4);
console.log(newarr);

// ------------------------------------------------------------


//CONDITIONAL STATEMENT------IF OPR ELESE

// let abc =10;
// if(abc==10){
//     alert("your condition is running")
//     document.write()

// }else{
//     alert("your condition is running")


// }
//------
// let aabb= prompt ("enter your number")
//  if(aabb > 20){
//     alert("its working")
//  }
// //  else("its not working")
//  else(alert("its not working"))
 
 //--------
//AND &&--all false except true true =true
//OR || all true except  false false =false

// let value = 10;
// if(value<11 && value%2==5){
//     alert("selected")
// }else("not selected")


// let age= prompt("enter your age")
// if(isNaN(age) && age>20){
//     alert("write your age")
// }else("you are capable")


let num= prompt("write any number")

if(num%2==0 || num%3==0){
    alert("correct number")
}
else if(num%5==0){
    alert(" number is not correct")

    
}
else if(num%7==0){
    alert(" number is not correct")

}


// let g= prompt("enterr your age")
// if(isNaN(g) || g>18){
//     alert("you are capable")
// }else
// alert("try next time")

// let m= prompt("write your grade")
// if(isNaN(m) ){
// }else if()














