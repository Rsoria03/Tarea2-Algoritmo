function PromedioCalificaciones() {
    let ncalificaciones, calificacion, promedio = 0, i, contador=0;
    ncalificaciones = parseInt(prompt(`¿Cuántas calificaciones desea ingresar?:`));
    for (i=0; i<ncalificaciones; i++) {
        calificacion = parseFloat(prompt(`Ingrese la nota ${i+1}:`));
        if (calificacion >= 70 ) {
        promedio = promedio + calificacion;
        contador = contador + 1;
        }
    }
    if (contador>0){
        promedio=promedio/contador;
        alert(`Promedios de notas >=70 es: ${promedio}`);
    } else {
        alert("No hay notas aprobatorias");
    }
}PromedioCalificaciones()