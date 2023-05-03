function showPasswd(){

    const check = document.getElementById("check");

    var longitud = document.getElementById("password").value;

    if(longitud.length == 0){
        alert("Debe introducir una contraseña para poder visualizarla");

        check.checked = false;
    }

    if(check.checked == true){
        document.getElementById("password").type = "text";
    }

    else{
        document.getElementById("password").type = "password";
    }
}
	

function validar(){

    var validado = true;

    var nombre , apellido , fechaNacimiento , usuario , contrasena;

    nombre = document.getElementById("name").value;
    apellido = document.getElementById("surname").value;
    fechaNacimiento = document.getElementById("birthday").value;
    usuario = document.getElementById("user").value;
    contrasena = document.getElementById("password").value;

    //Validación nombre
    if(nombre.length == 0){
        alert("Debe introducir su nombre");

        validado = false;
    }

    else if(!isNaN(nombre)){
        alert("El nombre no puede estar compuesto por números");

        validado = false;
    }
    
    //Validación apellidos
    if(apellido.length == 0){
        alert("Debe introducir sus apellidos");

        validado = false;
    }

    else if(!isNaN(apellido)){
        alert("Los apellidos no pueden estar compuestos por números");

        validado = false;
    }

    //Validación fecha de nacimiento
    if(fechaNacimiento.length == 0){
        alert("Debe introducir su fecha de nacimiento");

        validado = false;
    }

    //Validación usuario
    if(usuario.length == 0){
        alert("Debe introducir su nombre de usuario");

        validado = false;
    }

    else if(!isNaN(usuario)){
        alert("El usuario no puede estar compuesto por números");

        validado = false;
    }

    //Validación contraseña
    if(contrasena.length == 0){
        alert("Debe establecer una contraseña");

        validado = false;
    }

    else if(contrasena.length > 0 && contrasena.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");

        validado = false;
    }

    if(validado == true){
        alert("El formulario se ha enviado correctamente");
    }

    return validado;
}