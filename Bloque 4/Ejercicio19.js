function TabladeMultiplicarVarios () {
    let cnums, numero, i, tablap = 0, j;
    cnums = parseInt(prompt(`Ingrese la cantidad de numeros`));
    for (i=0; i<cnums; i++) {
        let tabla=1;
        let tablag = [];
        numero = parseInt(prompt(`Ingrese un número (${i+1}):`));
        for (j=0; j<10; j++) {
          tablap = tabla * numero;
          tabla = tabla + 1;
          tablag.push(tablap);
        }
        alert(`Tabla del ${numero} \n${tablag.join(", ")}`)
    }
} TabladeMultiplicarVarios();