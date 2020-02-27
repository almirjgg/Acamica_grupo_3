//Actividad de funciones

//funcion principal
function main() {
    //
    var pass = prompt("COLOCA LA CONTRASEÑA PARA INGRESAR A LA APLICACION").toLocaleLowerCase();
    if (pass == "luis") {
        var menu = "Operaciones disponibles\n\n";
        menu += "SUMA\n";
        menu += "PROMEDIO\n";
        menu += "PERIMETRO\n";
        menu += "DIVISION\n";
        var opcion = prompt(menu.toLocaleLowerCase());

        if (opcion == "suma") {
            document.write("la suma de los numeros es: " + suma());
        } else if (opcion == "promedio") {
            document.write("El promedio de los numeros es: " + promedio());
        } else if (opcion == "perimetro") {
            document.write("El perimetro es: " + perimetro());
        } else if (opcion == "division") {
            document.write("la division es: " + division());
        } else {
            alert("la opcion no es correcta");
        }

    } else {
        alert("CLAVE INCORRECTA NO PUEDES INGRESAR A LA APP");
    }

}

//suma
function suma(num1, num2) {
    num1 = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));
    var res = num1 + num2;

    return res;

}

//promedio
function promedio(num1, num2, num3, num4, num5) {
    num1 = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));
    num3 = parseInt(prompt("Ingrese el tercer numero"));
    num4 = parseInt(prompt("Ingrese el cuarto numero"));
    num5 = parseInt(prompt("Ingrese el quinto numero"));

    var promedio = (num1 + num2 + num3 + num4 + num5) / 5;

    return promedio;

}

//perimetro
function perimetro(diametro) {
    diametro = parseInt(prompt("ingrese el diametro del circulo para calcular el perimetro"));
    var perimetro = Math.PI * diametro;
    return perimetro;

}

//division
function division(num1, num2) {
    num1 = parseInt(prompt("Ingrese el primer numero a dividir"));
    num2 = parseInt(prompt("Ingrese el divisor"));
    var result = "";
    if (num2 === 0) {
        result = "no es posible dividor entre 0";
    } else {
        result = num1 / num2;
    }

    return result;

}



//division

function division(num1, num2) {

    num1 = parseInt(prompt("Ingrese el numero a dividir"));
    num2 = parseInt(prompt("Ingrese el numero divisor"));
    var result = parseInt(num1 / num2);
    
    return result;
}
main();