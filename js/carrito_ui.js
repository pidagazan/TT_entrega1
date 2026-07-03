import { renderizarCarrito, vaciarCarrito } from "./funcionesCarrito.js"

const asociarBotones = () =>{
    const boton_vaciar_carrito = document.getElementById("boton_vaciar_carrito")
    boton_vaciar_carrito.addEventListener("click",function(){
        vaciarCarrito()
    })
}

asociarBotones()

