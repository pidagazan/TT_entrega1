import { ARRAY_PRODUCTOS } from "./productos.js";

function obtenercarrito(){
    let carro = JSON.parse(localStorage.getItem('carrito_storage')) ?? [];
    return carro
}
export const agregarArticulo = (producto) => {
    carrito.push(producto)
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
/*Renderizarion a partir de objetos dentro de array, definido en productos.js */
/*export const renderizarTarjetas = (array_productos) =>{
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
*/


async function productosApi(){
    try{
        const respuesta = await fetch("https://fakestoreapi.com/products");
        const data = await respuesta.json()
        console.log(data)
        let contenedor_articulos = document.getElementById("contenedor-productos")
        data.forEach(producto => {
                let contenedor_articulo = document.createElement("article")
                let titulo_articulo= document.createElement("h3")
                let descripcion = document.createElement("p")
                let imagen = document.createElement("img")
                let boton_agregar = document.createElement("button")
                let precio = document.createElement("p")
                
                titulo_articulo.innerText = producto.title
                descripcion.innerText = producto.description
                imagen.src = producto.image
                boton_agregar.innerText = "Agregar al carrito"
                precio.innerText = `Precio: $${producto.price}`

                contenedor_articulo.appendChild(titulo_articulo)
                contenedor_articulo.appendChild(imagen)
                contenedor_articulo.appendChild(precio)
                contenedor_articulo.appendChild(boton_agregar)

                contenedor_articulo.className = "contenedor-articulo" 

                
                
                boton_agregar.addEventListener("click", function(){
                    agregarArticulo(producto)
                })
                contenedor_articulo.appendChild(boton_agregar)
                
                contenedor_articulos.appendChild(contenedor_articulo)
            })
    } catch (error){
        console.error("Error al obtener información de fetch:", error)
    }
}



let carrito = obtenercarrito()
actualizarCarritoUI()
productosApi()