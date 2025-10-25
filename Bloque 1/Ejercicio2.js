function ContarVocal() {
    let titulo, cv = 0, longt, vocal, titulom;
    titulo = prompt("Ingrese el título:");
    vocal = prompt("Ingrese una vocal para contar:");
    longt = titulo.length;
    titulom = titulo.toLowerCase();
    vocal = vocal.toLowerCase();
    for (let i = 0; i < longt; i++) {
        if (titulom[i] === vocal) {
            cv = cv + 1;
        }
    }
    alert (`${titulo} \nLa vocal ${vocal} se repite ${cv} veces`);
}ContarVocal();