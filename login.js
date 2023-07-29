
var cheak=document.getElementById("cheak");

cheak.addEventListener("click",toggle);

function toggle()
{
    var pass=document.getElementById("pass");
    var cpass=document.getElementById("cpass");
    var span=document.getElementById("span");

    if(pass.type==="password")
    {
        pass.type="text";
        span.innerHTML="hide password";
    }
    else
    {
        pass.type="password";
        span.innerHTML="show password"
    }

    if(cpass.type==="password")
    {
        cpass.type="text";
        span.innerHTML="hide password";
    }
    else
    {
        cpass.type="password";
        span.innerHTML="show password"
    }

}
var form=document.getElementById("form");
var username=document.getElementById("name");
var email=document.getElementById("email");
var password=document.getElementById("pass");
var cpassword=document.getElementById("cpass");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateinputs();
})

function validateinputs()
{
    var nameval=username.value.trim();
    var emailval=email.value.trim();
    var passwordval=password.value.trim();
    var cpasswordval=cpassword.value.trim();

    var temp1=0,temp2=0,temp3=0,temp4=0;

    if(nameval==="")
    {
        seterror(username,"please enter the name");
    }
    else
    {
        setsuccess(username);
        temp1=1;
    }

    if(emailval==="")
    {
        seterror(email,"please enter the email");
    }
    else
    {
        setsuccess(email);
        temp2=1;
    }

    if(passwordval==="")
    {
        seterror(password,"please enter the password");
    }
    else if(passwordval.length<8)
    {
        seterror(password,"password must have 8 characters");
    }
    else
    {
        setsuccess(password);
        temp3=1;
    }
    
    if(cpasswordval==="")
    {
        seterror(cpassword,"please enter the password");
    }
    else if(cpasswordval!==passwordval)
    {
        seterror(cpassword,"password miss match");
    }
    else
    {
        setsuccess(cpassword);
        temp4=1;
    }

    alertfunction(temp1,temp2,temp3,temp4);
}

function seterror(element,message)
{
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector("#error");

    errorelement.innerText=message;
}
function setsuccess(element)
{
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector("#error");

    errorelement.innerText="ㅤ";
}

function alertfunction(temp1,temp2,temp3,temp4)
{
    if(temp1===1&&temp2===1&&temp3==1&&temp4===1)
    {
        alert("submission successfull");
        location.reload();
    }
}