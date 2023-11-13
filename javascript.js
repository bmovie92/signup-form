function formValidation(){
    var firstname = document.forms["signup"]["firstname"];
    var lastname =document.forms["signup"]["lastname"];
    var password =document.forms["signup"]["password"];
    var email = document.forms["signup"]["email"];
    if(firstname.value==""){
        alert("name cant be blank");
        firstname.focus();
        return false;
    } else if (password.length>=6){
        alert("password too short");
        password.focus();
        return false;
    }else if (password.value==""){
        alert("enter password");
        password.focus();
        return false;
    }else if(lastname.value==""){
        alert("name cant be blank");
        lastname.focus();
        return false;
    }else if(email.value=="") {
        alert("email cant be empty");
        email.focus();
        return false;
    }else if (email.value.indexOf("@", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }else if(email.value.indexOf(".", 0) < 0) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    return true; 
}
    // if (firstname.value == "") {
    //     window.alert("Please enter your name.");
    //     name.focus();
    //     return false;
    // }
//  const firstname = document.getElementById("firstname");
//  const lastname =document.getElementById("lastname");
//  const email =document.getElementById("email");
//  const password = document.getElementById("password");
//  const form =document.getElementById("form");
//  const errorElem =document.getElementById("error");

//  form.addEventListener("submit",(e) =>{
//     let message = [];
//     if(firstname.value==""){
//         message.push("enter firstname");
//     }
//     if(lastname.value==""){
//         message.push("enter lastname");
//     }
//     if(password.value==''){
//         message.push("enter password")
//     }
//     if (message.length>0){
//         e.preventDefault()
//         errorElem.innerText = message.join(",");
//     }
    
//  })