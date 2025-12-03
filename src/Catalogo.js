import React, { useState, useEffect } from "react";
import "./App.css";

function Catalogo({ alSeleccionar, esAdmin, alEditar, alCrear }) { 
  const [productos, setProductos] = useState([]);

  // Cargar productos desde Spring Boot
  const cargarProductos = () => {
    fetch("http://localhost:8080/api/perfumes")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  // Eliminar perfume
  const eliminarPerfume = async (id) => {
    if(!window.confirm("¿Estás seguro de eliminar este perfume?")) return;
    try {
      await fetch(`http://localhost:8080/api/perfumes/${id}`, { method: "DELETE" });
      alert("Eliminado correctamente");
      cargarProductos();
    } catch (error) {
      alert("Error al eliminar");
    }
  };

  return (
    <section className="catalogo">
      {/* Cabecera con Botón Crear (Clases CSS) */}
      <div className="catalogo-header">
        <h2>
          Catálogo Exclusivo 
          {esAdmin && <span className="admin-badge">(ADMIN)</span>}
        </h2>
        
        {esAdmin && (
          <button className="btn-crear" onClick={alCrear}>
            + Nuevo Perfume
          </button>
        )}
      </div>

      <div className="grid">
        {productos.map((p) => (
          <div key={p.id} className="card">
            <img src={p.imagen} alt={p.nombre} className="card-img" />
            
            <h3>{p.nombre}</h3>
            <p className="marca">{p.marca}</p>
            
            <p className="descripcion">
                {p.descripcion ? p.descripcion.substring(0, 60) + "..." : ""}
            </p>
            
            <div className="precio-box">
              <span className="precio">${p.precio}</span>
              {p.precioViejo && <span className="precio-viejo">${p.precioViejo}</span>}
              {p.descuento && <span className="descuento">{p.descuento}</span>}
            </div>
            
            <button className="btn-comprar" onClick={() => alSeleccionar(p.id)}>
              Ver Detalles
            </button>

            {/* Botones de Admin (Clases CSS) */}
            {esAdmin && (
              <div className="admin-actions">
                <button className="btn-admin btn-editar" onClick={() => alEditar(p)}>
                  Editar
                </button>
                <button className="btn-admin btn-eliminar" onClick={() => eliminarPerfume(p.id)}>
                  Eliminar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;