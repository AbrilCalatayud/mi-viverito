let productos = [];

function traerProductos()
{
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
        productos = data;

        const contenedor = document.getElementById("contenedor-productos");

        data.forEach(producto => {
            const productoCard = `
                <div class="card-producto">
                    <img src="${producto.image}" alt="${producto.title}">
                    <p class="f4">${producto.title}</p>
                    <p class="f4"> Precio $${producto.price}</p>
                    <button class="boton-agregar" onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
                </div>
                `;
            contenedor.innerHTML += productoCard;
        });
    })
    .catch(error => {
        console.error('Error en la comunicación con la API:', error);
    });
}

function agregarAlCarrito(idProducto) 
{
    const producto = productos.find(p => p.id === idProducto);

    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existente = carrito.find(p => p.id === idProducto); //me fijo si está en el carrito

    if (existente != undefined) 
    {
        existente.cantidad++;
        existente.precio_total += existente.price;
    } else
    {
        carrito.push({
            ...producto, //copio los datos del producto, pero sin modificar el original. Los "..." se llaman spread operator
            cantidad: 1, //le sumo la cantidad
            precio_total: producto.price
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

traerProductos();