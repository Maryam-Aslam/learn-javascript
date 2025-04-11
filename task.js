// //USERNAME AND PASSWORD VERIFICATION
// let username = prompt("enter a username")
// let password = prompt("enter password")
// if(username==="admin"  && password==="112233"){
//     document.write("Acess granted")
// } 
// else {
//     document.write("invalid credentials")
// }

// //----------------
// //shows in one alert in one input ..
// let input= prompt("enter a username and password here ")
// let values = input.split(" ")
// let user= values [0];
// let pass= values [1];
// if (user==="maryam" && pass==="12345"){
//     alert("login succesfull")
// }else if(user !=="maryam"){
//     alert("incorect username")
// }else if(pass !==12345){
//     alert("incorect password")
// }else{
//     alert("login failed")
// }


// //find averge of three
// let input = prompt("write only 3 digits")
// if(input.length === 3 && !isNaN(input)){
//     let num1=Number(input[0]);
//     let num2=Number(input[1]);
//     let num3=Number(input[2]);

// let averge= (num1 + num2+ num3) /3;
// alert('the averge is' + averge);
// }
// else {
//     alert("write only 3 digit");}




 // find slargest number
let input=prompt("write only 3 digits")
if(input.length === 3 && !isNaN(input)){
    let num1=Number(input[0]);
    let num2=Number(input[1]);
    let num3=Number(input[2]);

let largest= Math.max(num1 , num2, num3);
alert("the largest number is" + largest);
}
else {
    alert("write only 3 digit");}
    


// // find smallest number
// let input=prompt("write only 3 digits")
// if(input.length === 3 && !isNaN(input)){
//     let num1=Number(input[0]);
//     let num2=Number(input[1]);
//     let num3=Number(input[2]);

// let largest= Math.min(num1 , num2, num3);
// alert( largest);
// }
// else {
//     alert("write only 3 digit");}