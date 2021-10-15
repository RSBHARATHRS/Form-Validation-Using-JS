let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

let email = document.getElementById("email");
let e1 = document.getElementById("e1");
let pass = document.getElementById("pass");

emailReg = new RegExp(/^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);

function checkValidate(event){
   
    console.log("checkValidateFunction");

    let emailValue = email.value;
    console.log("Entered Email ID :" + emailValue + ", is valid :" + emailReg.test(emailValue));

    if(!emailReg.test(emailValue)){
        email.focus();
        email.style.borderColor = "red";
    }
   
}