function ContarNegativos () {
    let cnums, numero, cnegativos=0, i;
    cnums = parseInt(prompt("Ingrese la cantidad de números:"));
    for (i=0; i<cnums; i++) {
        numero = parseInt(prompt(`Ingrese un número (${i+1})`));
        if (numero < 0){
            cnegativos = cnegativos + 1;
        }
    }
    if (cnegativos == 0) {
        alert(`No se ingresó números negativos`);
    } else {
        alert(`Cantidad de números negativos: ${cnegativos}`);
    }
} ContarNegativos();