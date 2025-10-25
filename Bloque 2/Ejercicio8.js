function  InvertirProductos() {
    let productos = [];
    let nproductos;
    let invertidos = [];
    nproductos = parseInt(prompt("¿Cuántos productos desea ingresar?"));
    for (let i = 0; i < nproductos; i++) {
        let producto = prompt(`Ingrese el nombre del producto ${i+1}:`);
        productos.push(producto);
    }
    for (let i = 0; i < productos.length; i++) {
        let invertido = "";
        for (let j = productos[i].length - 1; j >= 0; j--) {
            invertido = invertido + productos[i][j];
        }
        invertidos.push(invertido);
    }
    for (let i = 0; i < productos.length; i++) {
        alert(`Producto original ${i + 1}: ${productos[i]} \nProducto invertido: ${invertidos[i]}`);
    }
} InvertirProductos();