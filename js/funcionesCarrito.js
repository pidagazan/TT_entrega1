export const initCarrito = () => {
    let carro = JSON.parse(localStorage.getItem('carrito_storage')) ?? [];
    return carro
}




export const actualizarCarrito = () => {
    const li_carrito = document.getElementById("lista_p_carrito")
    const contador_articulos = document.getElementById("contador_carrito")
    
    li_carrito.innerHTML = " "
    carrito = []
    
    let total_articulos = 0
    let arreglo_storage_carrito = JSON.parse(localStorage.getItem('carrito_storage'))
    
    arreglo_storage_carrito.forEach(function(producto){        
        carrito.push(producto)
        total_articulos++
    })
    contador_articulos.innerHTML = (`${total_articulos}`)
    renderizarCarrito()
    }

export const vaciarCarrito = () => {
    carrito = []
    localStorage.setItem('carrito_storage',JSON.stringify(carrito))
    actualizarCarrito()
}


export const renderizarCarrito = () => {
    const li_carrito = document.getElementById("lista_p_carrito")
    carrito.forEach((producto, index) => {
        let contenedor = document.createElement("li")
        let titulo = document.createElement("h3")
        let precio = document.createElement("p")
        let contenedor_imagen = document.createElement("div")
        let contenedor_texto = document.createElement("div")
        let boton_eliminar_articulo = document.createElement("button")


        let titulo_slice = producto.title
        titulo.innerText = `${titulo_slice.slice(0,15)}...`
        precio.innerText = `Precio: $${producto.price}`
        contenedor_imagen.innerHTML = `<img src=${producto.image}></img>`
        boton_eliminar_articulo.innerText = "Eliminar artículo"
        
        contenedor.className = "contenedor_articulo_carrito"
        boton_eliminar_articulo.className = "boton_eliminar_articulo_carrito"

        contenedor_texto.appendChild(titulo)
        contenedor_texto.appendChild(precio)
        
        contenedor.appendChild(contenedor_texto)
        contenedor.appendChild(contenedor_imagen)
        contenedor.appendChild(boton_eliminar_articulo)

        boton_eliminar_articulo.addEventListener("click",function(){
            eliminarDelCarrito()
        })
        li_carrito.appendChild(contenedor)})

    if (li_carrito.innerHTML == " "){
        li_carrito.innerHTML = "<h1>SU CARRITO ESTÁ VACIO</h1>"
    }
}

export const eliminarDelCarrito = (indice) => {
    let carrito_storage = JSON.parse(localStorage.getItem('carrito_storage'))
    carrito_storage.splice(indice,1)
    carrito = carrito_storage
    localStorage.setItem('carrito_storage',JSON.stringify(carrito))
    actualizarCarrito()
}

let carrito = initCarrito()
actualizarCarrito()