let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let e1=document.getElementById("e1");
let pass=document.getElementById("pass");



function isValid(temp){
    if(temp.length <= 2){
        return false;
    }
    return true;
}

fname.addEventListener('keyup',(e)=>{
    if(fname.value.length <= 2){
        fname.style.borderColor="red";
    }else{
        fname.style.borderColor="green";
    }
});

lname.addEventListener('keyup',(e)=>{
    if(lname.value.length <= 2){
        lname.style.borderColor="red";
    }else{
        lname.style.borderColor="green";
    }
});
pass.addEventListener("change",()=>{
    if(pass.value.length <= 10){
        alert("Password shoulb be 10 characters");
    }

});

function storeInfo(){
    if(pass.value==""){
        e1.style.display="block";
    }
    let reg = /[a-zA-Z0-9]/
    if(!reg.test(pass.value)){
        alert("Password should be minimum 10 char");
    }
    let firstname = fname.value;
    console.log(firstname);
    if(!isValid(firstname)){
        
        return;
    }
}