import React, { useState, useEffect } from "react";
import "./App.css";

function Detalle({ idPerfume, alVolver }) {
  const [perfume, setPerfume] = useState(null);

  useEffect(() => {
    // Buscamos el perfume por su ID específico
    fetch(`http://localhost:8080/api/perfumes/${idPerfume}`)
      .then((response) => response.json())
      .then((data) => setPerfume(data))
      .catch((error) => console.error("Error:", error));
  }, [idPerfume]);

  if (!perfume) return <div className="cargando">Cargando detalles...</div>;

  return (
    <section className="detalle-container">
      <button className="btn-volver" onClick={alVolver}>
        ← Volver al Catálogo
      </button>

      <div className="detalle-card">
        <div className="detalle-imagen">
          <img src={perfume.imagen} alt={perfume.nombre} />
        </div>
        
        <div className="detalle-info">
          <h2 className="detalle-nombre">{perfume.nombre}</h2>
          <h3 className="detalle-marca">{perfume.marca}</h3>
          
          <div className="detalle-precios">
            <span className="precio-actual">${perfume.precio}</span>
            {perfume.precioViejo && <span className="precio-antes">${perfume.precioViejo}</span>}
          </div>

          <hr />
          
          <h4>Descripción</h4>
          <p>{perfume.descripcion}</p>

          <h4>Notas Olfativas</h4>
          <p className="notas-olfativas">✨ {perfume.notas || "No especificadas"}</p>

          <button className="btn-comprar-grande">Comprar Ahora</button>
        </div>
      </div>
    </section>
  );
}

export default Detalle;