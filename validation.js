function validate(){
    var name = document.getElementById("name")
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var confirm = document.getElementById("confirm")
    var agree = document.getElementById("agree")

    if(name.value.length < 3 ){
        alert("Input a valid name!");
        return false;
    }

    if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com!");
        return false;
    }

    if(password.value.length < 5){
        alert("Input a valid password");
        return false;
    }

    if(confirm.value!=password.value){
        alert("Password does not match!");
        return false;
    }

    if(!agree.checked){
        alert("Please agree to the terms and conditions!");
        return false;
    }

    alert("You have successfully enrolled in SUNBIC University!");
    return true;
}