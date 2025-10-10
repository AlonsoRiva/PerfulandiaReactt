import React from "react";
import "./App.css";

const productos = [
  {
    id: 1,
    nombre: "Khamrah EDP 100ml",
    marca: "Lattafa",
    descripcion: "Un perfume oriental especiado, cálido y envolvente.",
    precio: 18495,
    precioViejo: 36990,
    descuento: "-50%",
    imagen: "/perfumes/1.jpg",
  },
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

function Catalogo() {
  return (
    <section id="catalogo" className="catalogo">
      <h2>Catálogo de Perfumes</h2>
      <div className="grid">
        {productos.map((p) => (
          <div key={p.id} className="card">
            <img src={p.imagen} alt={p.nombre} className="card-img" />
            <h3>{p.nombre}</h3>
            <p className="marca">{p.marca}</p>
            <p className="descripcion">{p.descripcion}</p>
            <div className="precio-box">
              <span className="precio">${p.precio}</span>
              <span className="precio-viejo">${p.precioViejo}</span>
              <span className="descuento">{p.descuento}</span>
            </div>
            <button className="btn-comprar">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
