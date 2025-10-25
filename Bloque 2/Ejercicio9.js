function CompararLongitudesCiudades (){
    let ciudades = [], mayorl;
    let nciudades;
    nciudades = parseInt(prompt("¿Cuántas ciudades desea ingresar?"));
    for (let i = 0; i < nciudades; i++) {
        let ciudad = prompt(`Ingrese el nombre de la ciudad ${i + 1}:`);
        ciudades.push(ciudad);
    }
    for (let i = 0; i < ciudades.length - 1; i++) {
        mayorl = ciudades[0];
        for (let j = i + 1; j < ciudades.length; j++) {
            if (mayorl.length < ciudades[j].length) {
                mayorl = ciudades[j];
            }
        }
    } 
    alert(`La ciudad con mayor longitud es: ${mayorl}`);
} CompararLongitudesCiudades();