function InicialesdeCargos () {
    let ncargos, cargos = [], iniciales = [];
    ncargos = parseInt(prompt("¿Cuántos cargos desea ingresar?"));
    for (let i = 0; i < ncargos; i++) {
        let cargo = prompt(`Ingrese el nombre del cargo ${i + 1}:`);
        cargos.push(cargo);
    }
    for (let i = 0; i < cargos.length; i++) {
        let palabras = cargos[i].split(" ");
        let inicial = "";
        for (let j = 0; j < palabras.length; j++) {
            inicial = inicial + palabras[j][0].toUpperCase();
        }
        iniciales.push(inicial);
    }
    for (let i = 0; i < cargos.length; i++) {
        alert(`El cargo "${cargos[i]}" tiene las iniciales: ${iniciales[i]}`);
    }
} InicialesdeCargos();