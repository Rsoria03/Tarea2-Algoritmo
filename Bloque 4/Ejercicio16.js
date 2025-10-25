function PromedioCalificaciones() {
    let ncalificaciones, notasaprobatorias= [], calificacion, promedio = 0, i;
    ncalificaciones = parseInt(prompt(`¿Cuántas calificaciones desea ingresar?:`));
    for (i=0; i<ncalificaciones; i++) {
        calificacion = parseFloat(prompt(`Ingrese la nota ${i+1}:`));
        if (calificacion >= 70 ) {
            notasaprobatorias.push(calificacion);
        }
    }
    if (notasaprobatorias.length == 0){
      alert(`No hay notas aprobatorias`)
    } else{
      for (i=0; i<notasaprobatorias.length; i++){
        promedio = promedio + notasaprobatorias[i];
      }
      promedio = promedio / notasaprobatorias.length;
      alert (`Promedio de notas >= 70: ${promedio}`);
    }
} PromedioCalificaciones();