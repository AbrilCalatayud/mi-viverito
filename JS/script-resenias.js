let resenias = [
   { cliente: 'Maura R.', producto:'WD 2TB Elements Portable External Hard Drive - USB 3.0', opinion: 'Muy buena velocidad de transferencia. Lo uso para guardar fotos y trabajos de la facultad y funciona perfecto. Es liviano y fácil de transportar.' },
   { cliente: 'Sofia C.', producto:'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', opinion: 'Perfecto para instalar el sistema operativo. Es rápido y silencioso.' },
   { cliente: 'Álvaro M.', producto:'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', opinion: 'Ideal para actualizar una PC antigua. Se nota mucho la mejora al abrir programas y juegos.' },
   { cliente: 'Lautaro J.', producto:'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', opinion: 'Tengo más de 40 juegos instalados y sigue funcionando de manera excelente. Muy recomendable para PS4.' },
   { cliente: 'María Juana F.', producto:'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', opinion: 'Excelente calidad de imagen y colores muy vivos. Perfecto para estudiar y ver películas.' },
   { cliente: 'Jorge L.', producto:'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED', opinion: 'Una experiencia increíble para simuladores y juegos. La pantalla ultra ancha cambia completamente la forma de jugar.' },
 ];

function agregarResenias()
{
    const contenedor = document.getElementById("contenedor-resenias");

    resenias.forEach(resenia => {
        const reseniaCard = `
            <div class="resenia-card">
                <h4>${resenia.opinion}</h4>
                <h5>${resenia.producto}</h5>
                <h4> - ${resenia.cliente}</h4>
            </div>
            `;
        contenedor.innerHTML += reseniaCard;
    })
}

agregarResenias();