export const initCarrito = () => {
    let carro = JSON.parse(localStorage.getItem('carrito_storage')) ?? [];
    return carro
}

export const actualizarCarritoUI = () => {
    const contador_carrito = document.getElementById("contador_carrito")
    let total_productos = 0
    carrito.forEach(producto => {
        total_productos++
    })
    contador_carrito.innerText = total_productos
}

let carrito = initCarrito()
actualizarCarritoUI()