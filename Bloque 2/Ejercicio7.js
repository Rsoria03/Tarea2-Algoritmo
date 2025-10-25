function ContarVocalesTitulos () {
    let titulos = [], ntitulos, cv, longitud;
    ntitulos = parseInt(prompt("¿Cuántos títulos desea ingresar?"));
    let vocal = prompt("Ingrese una vocal para contar:");
    vocal = vocal.toLowerCase();
    for (let i = 0; i < ntitulos; i++) {
        let titulo = prompt(`Ingrese el título ${i + 1}:`);
        titulos.push(titulo);
    }
    longitud = titulos.length;
    for (let i = 0; i < longitud; i++) {
        let titulom = titulos[i].toLowerCase();
        cv = 0;
        for (let j = 0; j < titulom.length; j++) {
            if (titulom[j] === vocal) {
                cv = cv + 1;
            }
        }
        alert (`El título "${titulos[i]}" tiene la vocal "${vocal}" repetida ${cv} veces.`);
    }
} ContarVocalesTitulos();