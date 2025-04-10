//USERNAME AND PASSWORD VERIFICATION
// let username = prompt("enter a username")
// let password = prompt("enter password")
// if(username==="admin"  && password==="112233"){
//     document.write("Acess granted")
// } 
// else {
//     document.write("invalid credentials")
// }

//----------------
//shows in one alert in one input ..
let input= prompt("enter a username and password here ")
let values = input.split(" ")
let user= values [0];
let pass= values [1];
if (user==="maryam" && pass==="12345"){
    alert("login succesfull")
}else if(user !=="maryam"){
    alert("incorect username")
}else if(pass !=="12345"){
    alert("incorect password")
}else{
    alert("login failed")
}