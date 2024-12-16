function validar(){

var name, phone, email, message, expresion;

name = document.getElementById("name").value;
phone = document.getElementById("phone").value;
email = document.getElementById("email").value;
message = document.getElementById("message").value;

expresion = /\w+@\w+\.+[a-z]/;

if(name === ""){
    alert("Completa nombre");
    return false

}
else if(phone ===""){
    alert("Completa teléfono");
    return false
}

else if(email ===""){
    alert("Completa email");
    return false   
}
else if(!expresion.test(email)){
    alert("El email no es válido")
    return false

}

else if(message ===""){
    alert("Completa mensaje");
    return false
    
}
else if (name.length<5){
    alert("nombre muy corto, ingrese nuevamente");
    return false

}
else if(email.length<9){
    alert("el correo es muy corto, ingrese nuevamente")
    return false
}
else if (phone.length<7){
    alert("ingrese el número de teléfono completo")
    return false
}
else if (isNaN(phone)){
    alert ("El teléfono ingresado no es un número")
    return false
    
}
else if (message.length<15){
    alert("ingrese por lo menos más de 15 letras en mensaje")
    return false
}
}



