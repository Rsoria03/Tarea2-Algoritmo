function CompararCiudades (){
    let cuiudad1 = prompt("Ingrese el nombre de la primera ciudad:");
    let ciudad2 = prompt("Ingrese el nombre de la segunda ciudad:");
    let longitud1 = cuiudad1.length;
    let longitud2 = ciudad2.length; 
    if (longitud1 > longitud2) {
        alert(`La ciudad con el nombre más largo es: ${cuiudad1}`);
    } else if (longitud2 > longitud1) {
        alert(`La ciudad con el nombre más largo es: ${ciudad2}`);
    } else {
        alert("Ambas ciudades tienen nombres de igual longitud.");
    }
} CompararCiudades();