//Actividad de funciones

//funcion principal
function main() {
    //
    do {
        var pass = prompt("COLOCA LA CONTRASEÑA PARA INGRESAR A LA APLICACION").toLocaleLowerCase();

        if (pass == "luis") {



            var menu = "Operaciones disponibles\n\n";
            menu += "SUMA\n";
            menu += "PROMEDIO\n";
            menu += "PERIMETRO\n";
            menu += "DIVISION\n";
            menu += "DIAMETRO\n";
            menu += "pseudo\n";


            while (opcion != menu) {
                var opcion = prompt(menu.toLocaleLowerCase());


                if (opcion == "suma") {
                    document.write("la suma de los numeros es: " + suma());
                    break;
                } else if (opcion == "promedio") {
                    document.write("El promedio de los numeros es: " + promedio());
                    break;
                } else if (opcion == "perimetro") {
                    document.write("El perimetro es: " + perimetro());
                    break;
                } else if (opcion == "division") {
                    document.write("la division es: " + division());
                    break;
                } else if (opcion == "diametro") {
                    document.write("el diametro es: " + diametro());
                    break;
                } else if (opcion == "pseudo") {

                    document.write("la suma es: " + pseudo());
                    break;

                } else {
                    alert("la opcion no es correcta");
                }
            }







        } else {
            alert("CLAVE INCORRECTA NO PUEDES INGRESAR A LA APP");
        }

    } while (pass != "luis");



}

//suma
function suma(num1, num2) {
    num1 = parseInt(prompt("Ingrese el primer numero"));
    num2 = parseInt(prompt("Ingrese el segundo numero"));
    var result = num1 + num2;

    return result;

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
const PI = 3.1416;
//perimetro
function perimetro(diametro) {
    diametro = parseInt(prompt("ingrese el diametro del circulo para calcular el perimetro"));
    var perimetro = PI * diametro;
    return perimetro;

}

//diametro
function diametro(radio) {
    radio = parseInt(prompt("ingrese el radio del circulo para calcular el diametro"));
    var diametro = radio * 2;
    return diametro;

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

function pseudo(num1, num2) {

    do {
        num1 = parseInt(prompt("Ingrese el primer numero"));
        num2 = parseInt(prompt("Ingrese el numero"));

        if ((num1 % 1 == 0) && (num2 % 1 == 0)) {
            res = num1 + num2;
        } else {
            return "Debe ingresar numeros enteros";
        }
        /*  if (Number.isInteger(num1, num2)) {
             res = num1 + num2;

         } else {
             throw "debe colocar numeros enteros";
         } */
    } while (res < 100);

    return res;




}

main();