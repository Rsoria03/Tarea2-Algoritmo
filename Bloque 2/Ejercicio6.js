function ContarCaracteresFrases () {
    let frases = [];
    let nfrases;
    nfrases = parseInt(prompt("¿Cuántas frases desea ingresar?"));
    for (let i = 0; i < nfrases; i++) {
        let frase = prompt("Ingrese una frase:");
        frases.push(frase);
    }
    for (let i = 0; i < frases.length; i++) {
        console.log(`La frase "${frases[i]}" tiene ${frases[i].length} caracteres.`);
        alert(`La frase "${frases[i]}" tiene ${frases[i].length} caracteres.`);
    }
} ContarCaracteresFrases();