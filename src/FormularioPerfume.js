import React, { useState, useEffect } from "react";
import "./App.css";

function FormularioPerfume({ perfumeAEditar, alGuardar, alCancelar }) {
  // Estado inicial limpio
  const initialState = {
    nombre: "",
    marca: "",
    descripcion: "",
    notas: "",
    precio: 0, 
    precioViejo: null,
    descuento: "",
    imagen: "/perfumes/1.jpg"
  };

  const [form, setForm] = useState(initialState);

  // Rellenar formulario si es edición
  useEffect(() => {
    if (perfumeAEditar) {
      setForm(perfumeAEditar);
    }
  }, [perfumeAEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Conversión de números para que Spring Boot no falle
    let updatedValue = value;
    if (name === 'precio' || name === 'precioViejo') {
      updatedValue = value === '' ? null : Number(value);
    }
    setForm({ ...form, [name]: updatedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isEditing = !!perfumeAEditar;
    const url = isEditing 
      ? `http://localhost:8080/api/perfumes/${perfumeAEditar.id}`
      : "http://localhost:8080/api/perfumes";
    
    const method = isEditing ? "PUT" : "POST";

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
      alert(isEditing ? "Perfume actualizado" : "Perfume creado");
      alGuardar(); // Regresa al catálogo
    })
    .catch(err => alert("Error al guardar. Revisa que el backend esté corriendo."));
  };

  return (
    <section className="formulario-section">
        <div className="formulario-card">
            <h2>{perfumeAEditar ? "Editar Perfume" : "Crear Nuevo Perfume"}</h2>
            
            <form onSubmit={handleSubmit} className="form-group">
                <input className="form-input" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
                <input className="form-input" name="marca" placeholder="Marca" value={form.marca} onChange={handleChange} required />
                <textarea className="form-input form-textarea" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} required />
                <input className="form-input" name="notas" placeholder="Notas Olfativas" value={form.notas} onChange={handleChange} />
                <input className="form-input" type="number" name="precio" placeholder="Precio Actual" value={form.precio || ''} onChange={handleChange} required />
                <input className="form-input" type="number" name="precioViejo" placeholder="Precio Anterior (Opcional)" value={form.precioViejo || ''} onChange={handleChange} />
                <input className="form-input" name="descuento" placeholder="Descuento (ej: -20%)" value={form.descuento} onChange={handleChange} />
                <input className="form-input" name="imagen" placeholder="Ruta Imagen (/perfumes/1.jpg)" value={form.imagen} onChange={handleChange} required />
                
                <div className="form-actions">
                    <button type="submit" className="btn-guardar">
                        {perfumeAEditar ? "Guardar Cambios" : "Crear"}
                    </button>
                    <button type="button" onClick={alCancelar} className="btn-cancelar">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </section>
  );
}

export default FormularioPerfume;