/* Importaciones necesarias para el componente de catálogo */
import React from "react";
import "./App.css";

/* Array de productos con la información de cada perfume */
const productos = [
  {
    id: 1, // Identificador único del producto
    nombre: "Khamrah EDP 100ml",
    marca: "Lattafa",
    descripcion: "Un perfume oriental especiado, cálido y envolvente.",
    precio: 18495, // Precio con descuento
    precioViejo: 36990, // Precio original
    descuento: "-50%", // Porcentaje de descuento
    imagen: "/perfumes/1.jpg", // Ruta de la imagen
  },
  /* Más productos con estructura similar */
  {
    id: 2,
    nombre: "Badee Al Oud For Glory",
    marca: "Lattafa",
    descripcion: "Fragancia intensa y sofisticada, ideal para ocasiones especiales.",
    precio: 22393,
    precioViejo: 31990,
    descuento: "-30%",
    imagen: "/perfumes/2.jpg",
  },
  {
    id: 3,
    nombre: "Hayaati Al Maleky",
    marca: "Lattafa",
    descripcion: "Notas amaderadas y dulces, perfecta para el día a día.",
    precio: 18193,
    precioViejo: 25990,
    descuento: "-30%",
    imagen: "/perfumes/3.jpg",
  },
];

/* Componente principal del catálogo */
function Catalogo() {
  return (
    /* Sección principal del catálogo */
    <section id="catalogo" className="catalogo">
      {/* Título de la sección */}
      <h2>Catálogo de Perfumes</h2>
      {/* Grid para mostrar los productos */}
      <div className="grid">
        {/* Mapeo del array de productos para crear las tarjetas */}
        {productos.map((p) => (
          /* Tarjeta individual de producto */
          <div key={p.id} className="card">
            {/* Imagen del producto */}
            <img src={p.imagen} alt={p.nombre} className="card-img" />
            {/* Información del producto */}
            <h3>{p.nombre}</h3>
            <p className="marca">{p.marca}</p>
            <p className="descripcion">{p.descripcion}</p>
            {/* Contenedor de precios y descuento */}
            <div className="precio-box">
              <span className="precio">${p.precio}</span>
              <span className="precio-viejo">${p.precioViejo}</span>
              <span className="descuento">{p.descuento}</span>
            </div>
            {/* Botón de acción */}
            <button className="btn-comprar">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Exportación del componente */
export default Catalogo;