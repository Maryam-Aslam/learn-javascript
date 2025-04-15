//a block of code that reuseable is function
//function n method--call with--()

//first declard your code function and then for reuse only write function name with();-----
// function hello(){
//     document.write("its a function")
//     console.log("function in js")
//     alert("learn function")
// }
// hello();
// hello();
// hello();

//perameters n argumentss
//PERAMETERS:  o call some  function we give values  with these perameters
//hello (45,65)
//hello(p1 ,p2)
//--once we add perameters then their values will b add like this ...heres p1 =45 and p2=65
//and these values are called arguments

// function work(w1,w2){
//     document.write("learning perameters and arguments")
//     alert("check function with"+ w1 + w2)

// }
// work("declare a function" , 100);
// work(w1,w2);

// function avg(v1,v2,v3){
//     let result=(v1+v2+v3)/3;
//     document.write(result)
// }
// avg(10 , 5,6);
    
// function avg(){
//   let  a = Number (prompt("write any three number")) ;
//   let  b = Number (prompt("write any three number")); 
//   let  c = Number (prompt("write any three number")) ;

//           document.write((a+b+c)/3);
//     }
//     avg();

//     function large(){
//         let  v1 = Number (prompt("write any three number")) ;
//   let  v2 = Number (prompt("write any three number")); 
//   let  v3 = Number (prompt("write any three number")) ;
//   let result= Math.max(v1,v2,v3);
//   document.write(result);

//     }
//     large();
    
//     function days(){
//         let myday= new Date().getDay()
//     switch (myday) {
//     case 1:
//         document.write("its monday");
//         break;
//     case 2:
//         document.write("its tuesday");
//         break;
//     case 3:
//         document.write("its wednesday")
//         break;
//     case 4:
//         document.write("its thursday");
//         break;
//     case 5:
//         document.write("friday");
//         break;
//     case 6:
//         document.write("its saturday");
//         break;
//     case 7:
//         document.write("sundayyyy fundayyyy");
//         break;
//     default:
//         document.write("its not a week dayy");
// }
// }  
// days();
    
// function province(p1, p2 ,p3,p4){
//     let check= Number (prompt("write number between 1 to 4"));
//     document.write("on this number")
    
// }
// province("punjab", "sindh" ,"KPK", "BLOCHISTAN");
// province(p4);

//RETURN---
//anonymous function--

// function ret(p1){
//     return(p1+100);
// }
// let  a =ret(200);
// document.write(a);
// let z= Number(prompt("write any number"))
//  let ret2= function(value){
//     return(value/2);
//  }
//  let b=ret2(z);
//  document.write(b);

//arrow function 
// const ret1 = p1 => console.log(p1/3);
// ret1(100);

// let arr=["punj","sindh", "kpk","blochistan"];
// let uname= Number(prompt("write any number from 1 to 4"));
// function province(v1,v2){
//     document.write(v1[v2])
//     }
// province(arr,uname);
// province(v1,v2);

let num=Number(prompt("write any number"));
let i=0;
while (i=10;) {
    document.write(num*i );
    i++;
}