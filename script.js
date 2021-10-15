let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let mobNum = document.getElementById("mobNum");
let email = document.getElementById("email");
let e1 = document.getElementById("e1");
let pass = document.getElementById("pass");

emailReg = new RegExp(/^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
nameReg = new RegExp(/^([a-zA-Z]{3,20})$/);
lnameReg = new RegExp(/^([a-zA-Z]{1,20})$/);

function checkValidate(event){
   
    console.log("checkValidateFunction");

    let emailValue = email.value;
    let fnameValue = fname.value;
    let lnameValue = lname.value;
    let mobValue = mobNum.value;
    console.log("Entered Email ID :" + emailValue + ", is valid :" + emailReg.test(emailValue));

    //First name checking
    if(!nameReg.test(fnameValue)){
        email.focus();
        fname.style.borderColor = "red";
    }else{
        fname.style.borderColor = "green";
    }

    //last name checking
    if(!lnameReg.test(lnameValue)){
        email.focus();
        lname.style.borderColor = "red";
    }else{
        lname.style.borderColor = "green";
    }

    //Email checking
    if(!emailReg.test(emailValue)){
        email.focus();
        email.style.borderColor = "red";
    }else{
        email.style.borderColor = "green";
    }

    console.log(mobValue);
}