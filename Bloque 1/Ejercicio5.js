function InicialesProfesiones() {
    let profesion = prompt("Ingrese una profesión:");
    let iniciales = "";
    for (let i = 0; i < profesion.length; i++) {
        if (i === 0 || profesion[i - 1] === " ") {
            iniciales = iniciales + profesion[i].toUpperCase();
        }
    }
    alert(`La profesión ingresada es: ${profesion} \nLas iniciales son: ${iniciales}`);
} InicialesProfesiones();