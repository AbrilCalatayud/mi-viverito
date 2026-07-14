function actualizarCarrito()
{
    let cantidadTotalTodos = 0;
    let precioTotalTodos = 0;

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    var listaCarrito = document.getElementById('lista-carrito');

    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {

        cantidadTotalTodos += producto.cantidad;
        precioTotalTodos += producto.cantidad * producto.price;

        const li = `
            <li class="elemento-carrito">
                <img src="${producto.image}" alt="${producto.title}">
                <p class="f4">${producto.title}</p>
                <p class="f4">Cant.:${producto.cantidad}</p>
                <p class="f4"> Precio Unidad $${producto.price}</p>
                <p class="f4"> Precio Total $${producto.precio_total}</p>
                <button class="boton-sacar-carrito" onclick="sacarDelCarrito(${producto.id})">Sacar del carrito</button>
            </li>
            `;
        listaCarrito.innerHTML += li;
    })

    document.getElementById("cantidad-productos-todos").textContent = "Cantidad de productos: " + cantidadTotalTodos;

    document.getElementById("precio-total-todos").textContent = "Total: $" + precioTotalTodos;
}

actualizarCarrito();