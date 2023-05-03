var nombre;
var edad;
var nTrabajadores;


//VALIDACIONES

function nombreCorrecto(nombre){
    var valor;
    var correcto;

    do{
        correcto = true;

        valor = prompt(nombre);
        if(valor.length == 0){
            alert("No puede dejar este campo vacío");
            correcto = false;
        }

        else if(valor == " "){
            alert("No puede dejar este campo vacío");
            correcto = false;
        }

        else if(!/^[A-Za-zñÑáéíóúÁÉÍÓÚ]+\s?[A-Za-zñÑáéíóúÁÉÍÓÚ]*$/.test(valor)){
            alert("El nombre debe estar compuesto por letras y solo puede haber un espacio en blanco seguido");
            correcto = false;
        }
    }while((correcto == false));

    return valor;
}

function edadCorrecta(edad) {
    var valor;
    var correcto;

    do {
        correcto = true;

        valor = parseInt(prompt(edad));
        
        if (isNaN(valor)) {
            alert("La edad debe estar compuesta por números");

            correcto = false;
        }

        else if(valor < 16){
            alert("No pueden haber trabajadores menores de 16 años");

            correcto = false;
        }

        else if(valor > 69){
            alert("No pueden haber trabajadores mayores de 69 años");

            correcto = false;
        }
    }while (correcto == false);

    return valor;
  }

//

//GUI
do{
    alert("A continuación se le va a solicitar la introducción de trabajadores");

        nTrabajadores = parseInt(prompt("¿Cuántos trabajadores desea introducir?"));

        if(isNaN(nTrabajadores)){
            alert("Debe introducir un número");
        }
}while(isNaN(nTrabajadores));

  
var trabajadores = new Array(nTrabajadores);

for(var i = 0; i<nTrabajadores;i++){

    nombre = nombreCorrecto("Introduzca el nombre del trabajador " + (i+1));
    edad = edadCorrecta("Introduzca la edad del trabajador " + (i+1));
    trabajadores[i] = {nombre: nombre, edad: edad}; 
}

document.write("<h1>Listado de trabajadores</h1>");

document.write("<table>");

document.write("<tr><th>Nombre</th><th>Edad</th></tr>");

for(var i=0;i<nTrabajadores;i++){
    document.write("<tr><td>" + trabajadores[i].nombre + "</td><td>"+ trabajadores[i].edad+"</td></tr>");
}

document.write("</table>")