function PromedioParesImpares () {
    let cnums, numero, pares=0, impares=0, i;
    let cpares=0, cimpares=0;
    let promP=0, promIp=0;
    cnums = parseInt(prompt("Ingrese cantidad de números:"));
    for (i=0; i<cnums; i++){
        numero = parseInt(prompt(`Ingrese el número ${i+1}:`))
        if (numero % 2 == 0) {
            pares = pares + numero;
            cpares = cpares + 1;
        } else {
            impares = impares + numero;
            cimpares = cimpares + 1;
        }
    }
    promP = pares / cpares;
    promIp = impares / cimpares
    alert(`Promedio de pares: ${promP} \nPromedio de impares: ${promIp}`)
}PromedioParesImpares ()