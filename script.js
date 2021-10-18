let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let mobNum = document.getElementById("mobNum");
let email = document.getElementById("email");
let e1 = document.getElementById("e1");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");

emailReg = new RegExp(/^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
nameReg = new RegExp(/^([a-zA-Z]{3,20})$/);
lnameReg = new RegExp(/^([a-zA-Z]{1,20})$/);

function checkValidate(event){
 
    console.log("checkValidateFunction");

    let emailValue = email.value;
    let fnameValue = fname.value;
    let lnameValue = lname.value;
    let mobValue = mobNum.value;
    let passValue = pass.value;
    let cpassValue = cpass.value;
    console.log("Entered Email ID :" + emailValue + ", is valid :" + emailReg.test(emailValue));

    //First name checking
    if(!nameReg.test(fnameValue)){
        fname.focus();
        fname.style.borderColor = "red";
        return;
    }else{
        fname.style.borderColor = "green";
    }

    //last name checking
    if(!lnameReg.test(lnameValue)){
        lname.focus();
        lname.style.borderColor = "red";
        return;
    }else{
        lname.style.borderColor = "green";
    }

    //Mobile Number
    if(mobValue == '' || mobValue.length != 10){
        mobNum.style.borderColor = "red";
        mobNum.focus();
        return;
    }else{
        mobNum.style.borderColor = "green";
    }

    //Email checking
    if(!emailReg.test(emailValue) || emailValue == ''){
        email.focus();
        email.style.borderColor = "red";
        return;
    }else{
        email.style.borderColor = "green";
    }

    //Password same or not
    if(passValue == '' || passValue == null){
        pass.style.borderColor = "red";
        pass.focus();
        return;
    }
    if(cpassValue == '' || cpassValue == null){
        cpass.style.borderColor = "red";
        cpass.focus();
        return;
    }
    console.log("New Pass: "+passValue+"Confirm Pass : "+cpassValue);
    if(!passValue == cpassValue){
        alert("New Password and confirm password must be same");
        return;
    }
    else{
        pass.style.borderColor = "green";
    }
    console.log(mobValue);
}