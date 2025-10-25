function PromedioParesImpares () {
    let cnums, numero, pares=[], impares=[], i;
    let promP=0, promIp=0;
    cnums = parseInt(prompt("Ingrese cantidad de números:"));
    for (i=0; i<cnums; i++){
        numero = parseInt(prompt(`Ingrese el número ${i+1}:`))
        if (numero % 2 == 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    }
    for (i=0; i<pares.length; i++){
        promP = promP + pares[i];
    }
    for (i=0; i<impares.length; i++){
        promIp = promIp + impares[i];
    }
    promP = promP / pares.length;
    promIp = promIp / impares.length;
    alert(`Promedio de pares: ${promP} \nPromedio de impares: ${promIp}`)
}PromedioParesImpares ()