function realizarOperacion(num1, num2, operacion){
    if (operacion === "suma"){
        return num1 + num2;
    }else if (operacion === "resta"){
        return num1 - num2;
    }else if (operacion === "multiplicacion"){
        return num1 * num2;
    } else if (operacion === "division"){
        if (num2 !== 0){
            return num1 / num2;
        }else {
            return "Error: Division por cero no permitida.";
        }
    } else {
        return "Error: Operaación no válida. solo se permiten suma, resta, multiplicación y división.";
    }
 
}
document.writeln("El resultado de la suma es: " + realizarOperacion(20, 4, "suma") + "<br>");
document.writeln("El resultado de la resta es: " + realizarOperacion(20, 4, "resta") + "<br>");
document.writeln("El resultado de la multiplicacion es: " + realizarOperacion(20, 4, "multiplicacion") + "<br>");
document.writeln("El resultado de la division es: " + realizarOperacion(20, 4, "division") + "<br>");