// let input=(" enter name and password")
// let values= input.split("")
// let naam= values[0];
// let password= values[1];

// if(naam==="ali" && password==="0987"){
//     document.write("loggedin succesfully")
// }
//  else if(naam !=="ali" ){
//     document.write("wrong naam")
//  }
//  else if(password !=="0987" ){
//     document.write("wrong naam")
// }
// else{
// document.write("login failed")
// }

//-----------------------
// //find averge of three
// let input=("write only 3 digits")
// if(input.length === 3 && !isNaN(input)){
//     let num1=Number[input[0]];
//     let num2=Number[input[1]];
//     let num3=Number[input[2]];

// let averge= (num1 + num2+ num3) /3;
// alert('the averge is' + averge);
// }
// else {
//     alert("write only 3 digit");}

// // find largest number
// let input=prompt("write only 3 digits")
// if(input.length === 3 && !isNaN(input)){
//     let num1=Number(input[0]);
//     let num2=Number(input[1]);
//     let num3=Number(input[2]);

// let largest= Math.max(num1 , num2, num3);
// alert( largest);
// }
// else {
//     alert("write only 3 digit");}

// find smallest number
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

















// let input=prompt("write only three digit to find avrge")
// if(input.length==="3" && !isNaN(input)){
//     let num1=Number(input[0]);
//     let num2=Number(input[1]);
//     let num3=Number(input[2]);
//     let avarge=(num1 + num2+ num3) /3;
//     alert(averge);

// } else{
//     alert("wrte only three digit")
// }


//find largest number
// let input= prompt("write 3 number")
// if(input.length===3 && isNaN(input)){
//     num1=Number(input[0]);
//     num2=Number(input[1]);
//     num3=Number(input[2]);
// let largest=Math.max(num1 , num2 , num3);
// alert(largest);

// }else{
//     alert("write only three digit");
// }


// let input= prompt("write your name and password")
// let value=input.split(" ");
// let username=input[0];
// let password=input[1];
// if(usernmae==="admin" && password==="12345"){
//     alert("login successfully");
// } else if(usernam!=="admin")
// alert("incorrect usernmae");
// {
//     else if (password !=="12345")
//         alert("incorrect password");
// }
// else {
//     alert("wrong credetials")
// }
































// let input= prompt("enter username and passwor");
// let values=input.split(" ");
// let username= values[0];
// let password= values[1];
// if(username==="admin" && password==="12345"){
//     alert("login successfully")
// }
// else if (username !=="admin"){
//     alert("incorrect username")
// }
//    else if (username !== "12345"){
//         alert("incorrect password")}

//     else {
//         alert("invalid credentials")
//     }






// let input= prompt("find the averge of three digit");
// if(input.length===3 && !isNaN(input)){
//     let num1= Number(input[0]);
//     let num2= Number(input[1]);
//     let num3= Number(input[2]);
//      let avarge= (num1+num2+num3)/3;
//      alert("the averge is"+ avarge)
// }else
// {
//     alert("write only three digits")
// }


// let input= prompt("find the largest of three digit");
// if(input.length===3 && !isNaN(input)){
//     let num1= Number(input[0]);
//     let num2= Number(input[1]);
//     let num3= Number(input[2]);
//      let largest=Math.max (num1,num2,num3);
//      alert("the largest is "+ largest)
// }else
// {
//     alert("write only three digits")
// }

// let day = Number(prompt("enter any number to get the day info"));
// switch (day) {
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
// let date = new Date().getDay();
// document.write(date);



let months = Number (prompt("write any number to know the month name"));
switch (months) {
    case 1:
        document.write("january");
        break;
    case 2:
        document.write("febrary");
        break;
    case 3:
        document.write("march");
        break;
    case 4:
        document.write("april");
        break;
    case 5:
        document.write("may");
        break;
    case 6:
        document.write("june");
        break;
    case 7:
        document.write("july");
        break;
    case 8:
        document.write("august");
        break;
    case 9:
        document.write("september");
        break;
    case 10:
        document.write("october");
        break;
    case 11:
        document.write("november");
        break;
    case 12:
        document.write("december");
        break;
        default: 
        document.write("its not a month number")
}