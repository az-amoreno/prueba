function changeColor(nuevoColor){
    var cuadrado = document.getElementById("cuadrado");

    if(cuadrado.style.backgroundColor != nuevoColor){
        cuadrado.style.backgroundColor = nuevoColor;
    }

    else{
        alert("The square is already " + nuevoColor);
    }
}

var claro = true;

function screen(){

    const body = document.querySelector("body");

    const moon = document.getElementById("moon");

    const sun = document.getElementById("sun");

    if(claro == true){
        body.style.backgroundColor="black"
        document.querySelector("section").style.border="solid 2px white";
        body.style.color="white";
        moon.style.display="none";
        sun.style.display="block";

        claro = false;
    }

    else{
        body.style.backgroundColor="inherit";
        document.querySelector("section").style.border="solid 2px rgb(13, 11, 114)";
        body.style.color="inherit";
        sun.style.display="none";
        moon.style.display="block";

        claro = true;
    }
}