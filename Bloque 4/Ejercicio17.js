function CantidadNegativosN () {
    let cnums, numero, negativos=[], i;
    cnums = parseInt(prompt("¿Cuántos números desea ingresar?:"));
    for (i=0; i<cnums; i++) {
        numero = parseFloat(prompt(`Ingrese un número (${i+1}):`))
        if (numero < 0) {
            negativos.push(numero);
        }
    }
    alert (`Cantidad de negativos: ${negativos.length}`);
} CantidadNegativosN();