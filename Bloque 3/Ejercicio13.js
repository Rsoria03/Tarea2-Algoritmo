function PromedioMayoresMenores () {
    let edad, edadesma=0, edadesme=0, cma=0, cme=0, edades, i;
    let proma=0, prome=0;
    edades = parseInt(prompt("Ingrese número de personas:"));
    for (i=0; i<edades; i++) {
        edad = parseInt(prompt(`Ingrese la edad de la persona ${i+1}:`))
        if (edad >= 18) {
            edadesma = edadesma + edad;
            cma = cma + 1;
        } else {
            edadesme = edadesme + edad;
            cme = cme + 1;
        }
    }
    proma = edadesma / cma;
    prome = edadesme / cme;
    alert(`Promedio de mayores de edad: ${proma} \nPromedio de menores de edad: ${prome}`);
}PromedioMayoresMenores ()