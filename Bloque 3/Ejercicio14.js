function TabladeMultiplicar () {
    let numero, tabla=1, i, tablap;
    numero = parseInt(prompt("Ingrese un número: "))
    alert(`Tabla del ${numero}`)
    for (i=0; i<10; i++) {
        tablap = tabla * numero;
        alert(`${numero} x ${i+1} = ${tablap}`)
        tabla = tabla + 1;
    }
} TabladeMultiplicar ();