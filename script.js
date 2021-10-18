

//*************Login Page*****************/
let InUserName = document.getElementById("Iemail");
let InPass = document.getElementById("Ipass");

function login(){
    let uname = window.localStorage.getItem("userName");
    let upass = window.localStorage.getItem("password");
    if(InUserName.value == uname && InPass.value == upass){
        alert("Successfully loged in");
        window.location.replace("./home.html");
    }else{
        alert("Enter a valid User Name and password");
    }
}


/********Create New Account Page*********/
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
passsReg = new RegExp(/^([\da-zA-Z@\.#]{8,12})$/);

function checkValidate(event){
    
    allOk = true;
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
        allOk = false;
        return;
    }else{
        fname.style.borderColor = "green";
    }

    //last name checking
    if(!lnameReg.test(lnameValue)){
        lname.focus();
        lname.style.borderColor = "red";
        allOk = false;
        return;
    }else{
        lname.style.borderColor = "green";
    }

    //Mobile Number
    if(mobValue == '' || mobValue.length != 10)
    {
        mobNum.style.borderColor = "red";
        mobNum.focus();
        allOk = false;
        return;
    }else{
        mobNum.style.borderColor = "green";
    }

    //Email checking
    if(!emailReg.test(emailValue) || emailValue == '')
    {
        email.focus();
        email.style.borderColor = "red";
        allOk = false;
        return;
    }else{
        email.style.borderColor = "green";
    }

    //Password same or not
    if(passValue == '' || passValue == null){
        pass.style.borderColor = "red";
        pass.focus();
        allOk = false;
        return;
    }
    if(cpassValue == '' || cpassValue == null){
        cpass.style.borderColor = "red";
        cpass.focus();
        return;
    }
    console.log("New Pass: "+passValue+"Confirm Pass : "+cpassValue);
    if(passValue != cpassValue){
        alert("New Password and confirm password must be same");
        pass.style.borderColor = "red";
        cpass.style.borderColor = "red";
        allOk = false;
    }
    else{
        pass.style.borderColor = "green";
        cpass.style.borderColor = "green";
    }

    if(allOk){
        window.localStorage.setItem("MobNum",mobValue);
        window.localStorage.setItem("userName",emailValue);
        window.localStorage.setItem("password",passValue);
        alert("Submitted");
        window.location.replace("./index.html");
    }   
}

/************Forget Password Page********/
let fphoneNum=document.getElementById("fphoneNum");
let fnpass=document.getElementById("fnpass");
let fcpass=document.getElementById("fcpass");

function back(){
    window.location.replace("./index.html");
}

function updatePassword(){
    if(window.localStorage.getItem("MobNum") == fphoneNum.value){
        if(fnpass.value == fcpass.value){
            window.localStorage.setItem("password",fnpass.value);
            alert("Password Updated Successfully");
            window.location.replace("./index.html");
        }else{
            alert("New Password and Confirm password must be same");
            return;
        }
    }else{
        alert("Enter a Correct Phone number");
    }
}