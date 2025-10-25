function InvertirTexto () {
    let texto = prompt("Ingrese un texto:");
    let Invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        Invertido = Invertido + texto[i];
    }
    alert(`Texto original: ${texto} \nTexto invertido: ${Invertido}`);
} InvertirTexto();