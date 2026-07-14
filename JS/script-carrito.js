function actualizarCarrito()
{
    let cantidadTotalTodos = 0;
    let precioTotalTodos = 0;

    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    var listaCarrito = document.getElementById('lista-carrito');

    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {

        cantidadTotalTodos += producto.cantidad;
        precio_total = producto.cantidad * producto.price;
        precioTotalTodos += precio_total;

        const li = `
            <li class="elemento-carrito">
                <img src="${producto.image}" alt="${producto.title}">
                <h4>${producto.title}</h4>
                <h4> Precio Unidad $${producto.price}</h4>
                <h4> Precio Total $${precio_total}</h4>
                <div class="contendor-cantidad">
                    <button onclick="disminuirCantidad(${producto.id})"> - </button>
                    <h4>${producto.cantidad}</h4>
                    <button onclick="aumentarCantidad(${producto.id})"> + </button>
                    <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
                </div>
            </li>
            `;
        listaCarrito.innerHTML += li;
    })

    document.getElementById("cantidad-productos-todos").textContent = "Cantidad de productos: " + cantidadTotalTodos;

    document.getElementById("precio-total-todos").textContent = "Total: $" + precioTotalTodos;
}

function vaciarCarrito()
{
    localStorage.removeItem("carrito");
    actualizarCarrito();
}

function disminuirCantidad(idProducto)
{
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const producto = carrito.find(p => p.id === idProducto);

    if (producto.cantidad > 1)
    {
        producto.cantidad--;
    }
    else
    {       
        const indice = carrito.findIndex(p => p.id === idProducto);
        carrito.splice(indice, 1); //saca un elemento del array carrito a partir del índice
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();
}

function aumentarCantidad(idProducto) 
{
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const producto = carrito.find(p => p.id === idProducto);

    producto.cantidad++;

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito(idProducto);
}

function eliminarProducto(idProducto)
{
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const indice = carrito.findIndex(p => p.id === idProducto);
    carrito.splice(indice, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarCarrito();
}

actualizarCarrito();