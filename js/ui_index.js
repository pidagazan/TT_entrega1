import { ARRAY_PRODUCTOS } from "./productos.js";

function obtenercarrito(){
    let carro = JSON.parse(localStorage.getItem('carrito_storage')) ?? [];
    return carro
}
export const agregarArticulo = (id_producto) => {
    carrito.push(ARRAY_PRODUCTOS[id_producto])
    localStorage.setItem('carrito_storage',JSON.stringify(carrito))
    alert("PRODUCTO AGREGADO CON EXITO")
    actualizarCarritoUI()
}

export const actualizarCarritoUI = () => {
    const contador_carrito = document.getElementById("contador_carrito")
    let total_productos = 0
    carrito.forEach(producto => {
        total_productos++
    })
    contador_carrito.innerText = total_productos
}

export const renderizarTarjetas = (array_productos) =>{
    const contenedor_tarjetas = document.getElementById("contenedor-productos") 
    ARRAY_PRODUCTOS.forEach(function(producto) {
        let p_descripcion = document.createElement("p")
        let p_titulo = document.createElement("h3")
        let imagen = document.createElement("img")
        let p_precio = document.createElement("p")
        let contenedor_articulo = document.createElement("article")
        let botton_agregar = document.createElement("button")
        
        
        imagen.src = producto.ruta_imagen
        p_descripcion.innerHTML = producto.descripcion
        p_titulo.innerHTML = producto.nombre
        p_precio.innerHTML = `Precio: $${producto.precio}`
        botton_agregar.innerHTML = "Agregar al carrito"
        
        contenedor_articulo.className="contenedor-articulo"
        contenedor_articulo.id = `contenedor-articulo${producto.id}`
        
        

        contenedor_articulo.appendChild(imagen)
        contenedor_articulo.appendChild(p_titulo)
        contenedor_articulo.appendChild(p_descripcion)
        contenedor_articulo.appendChild(p_precio)
        contenedor_articulo.appendChild(botton_agregar)

        contenedor_tarjetas.appendChild(contenedor_articulo)

        botton_agregar.addEventListener("click", function(){ agregarArticulo(producto.id)})
    });
}

renderizarTarjetas(ARRAY_PRODUCTOS)
let carrito = obtenercarrito()
actualizarCarritoUI()