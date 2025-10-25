function promediodeEdades () {
    let nEdades, proMa = 0, prome = 0, edad, mayores=[], menores=[], i;
    nEdades = parseInt(prompt("Ingrese número de personas:"));
    for (i=0; i<nEdades; i++){
        edad = parseInt(prompt(`Ingrese la edad ${i+1}:`));
        if (edad >= 18) {
            mayores.push(edad);
        } else {
            menores.push(edad);
        }
    }
    for (i=0; i<mayores.length; i++) {
        proMa = proMa + mayores[i];
    } 
    for (i=0; i<menores.length; i++) {
        prome = prome + menores[i];
    } 
    proMa = proMa / mayores.length;
    prome = prome / menores.length;
    alert (`Promedio de mayores de edad: ${proMa} \nPromedio de menores de edad: ${prome}`);
} promediodeEdades();