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
















