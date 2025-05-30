function realizarOperacion(){
   while(true){
    let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");
    if (operacion === "salir") {
        alert("Gracias por usar el programa. ¡Hasta luego!");
        break;
    }
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;
    if (operacion === "suma") {
        resultado = num1 + num2;
    }else if (operacion === "resta") {
        resultado = num1 - num2;
   } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            alert("Error: División por cero no permitida.");
            continue; // Volver al inicio del bucle
        }
    }else{
        alert("Error: Operación no válida. Solo se permiten suma, resta, multiplicación y división.");
        continue; // Volver al inicio del bucle
    }
    alert("El resultado de la " + operacion + " es: " + resultado);
}
}
 realizarOperacion();