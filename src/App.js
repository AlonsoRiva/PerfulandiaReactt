import React, { useState, useEffect } from "react";
import "./App.css";
import Catalogo from "./Catalogo";
import Contacto from "./Contacto";
import Auth from "./Auth";
import Detalle from "./Detalle";
import FormularioPerfume from "./FormularioPerfume";

function App() {
  const [vista, setVista] = useState("inicio");
  const [perfumeSeleccionado, setPerfumeSeleccionado] = useState(null);
  
  // --- ESTADOS AGREGADOS PARA AUTH Y CRUD ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [esAdmin, setEsAdmin] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [perfumeAEditar, setPerfumeAEditar] = useState(null);

  // Efecto para mantener sesión al recargar
  useEffect(() => {
    const token = localStorage.getItem("token");
    const rol = localStorage.getItem("rol");
    const user = localStorage.getItem("usuario");

    if (token) {
      setIsLoggedIn(true);
      setUsuario(user);
      if (rol === "ADMIN") setEsAdmin(true);
    }
  }, []);

  // Login
  const handleLogin = (rol) => {
    setIsLoggedIn(true);
    setUsuario(localStorage.getItem("usuario"));
    if (rol === "ADMIN") setEsAdmin(true);
    setVista("catalogo");
  };

  // Logout
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setEsAdmin(false);
    setUsuario("");
    setVista("inicio");
  };

  // Navegación CRUD
  const verDetalle = (id) => {
    setPerfumeSeleccionado(id);
    setVista("detalle");
  };

  const irACrear = () => {
    setPerfumeAEditar(null);
    setVista("formulario");
  };

  const irAEditar = (perfume) => {
    setPerfumeAEditar(perfume);
    setVista("formulario");
  };

  const volverAlCatalogo = () => {
    setVista("catalogo");
  };
  
  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo" onClick={() => setVista("inicio")}>Perfulandia</h1>
          <ul className="nav-links">
            <li>
              <button
                onClick={() => setVista("inicio")}
                className={vista === "inicio" ? "active" : ""}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => setVista("catalogo")}
                className={vista === "catalogo" ? "active" : ""}
              >
                Catálogo
              </button>
            </li>
            <li>
              <button
                onClick={() => setVista("contacto")}
                className={vista === "contacto" ? "active" : ""}
              >
                Contacto
              </button>
            </li>
            
            {/* Lógica de Login/Logout en el botón */}
            {!isLoggedIn ? (
              <li>
                <button
                  onClick={() => setVista("auth")}
                  className={vista === "auth" ? "active" : ""}
                >
                  Login / Registro
                </button>
              </li>
            ) : (
              <li style={{display:'flex', alignItems:'center', gap:'10px'}}>
                <span style={{fontSize:'0.9rem', color:'#333'}}>Hola, {usuario}</span>
                <button 
                  onClick={handleLogout} 
                  style={{color: 'red', background:'transparent', border:'none', cursor:'pointer', fontWeight:'bold'}}
                >
                  Salir
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* HOME (Tu contenido original del inicio) */}
      {vista === "inicio" && (
        <>
          <section className="hero">
            <div className="hero-text">
              <h2>Bienvenido a Perfulandia</h2>
              <p>El aroma que define tu estilo</p>
              <button className="btn-comprar" onClick={() => setVista("catalogo")}>
                Ver Catálogo
              </button>
            </div>
          </section>

           <section className="features">
            <h2>¿Por qué elegirnos?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src="/img/icono1.png" alt="Fragancias Exclusivas" className="feature-icon" />
                <h3>Fragancias Exclusivas</h3>
                <p>Perfumes únicos y originales de las mejores marcas.</p>
              </div>
              <div className="feature-card">
                <img src="/img/icono2.png" alt="Envíos a Todo Chile" className="feature-icon" />
                <h3>Envíos a Todo Chile</h3>
                <p>Tu fragancia favorita directo a tu puerta.</p>
              </div>
              <div className="feature-card">
                <img src="/img/icono3.png" alt="Precios Accesibles" className="feature-icon" />
                <h3>Precios Accesibles</h3>
                <p>Perfumes de calidad a precios que amarás.</p>
              </div>
            </div>
          </section>

          <section className="about">
            <div className="about-container">
              <div className="about-image">
                <img src="/alonso.jpg" alt="Fundador Alonso Rivadeneira" />
              </div>
              <div className="about-text">
                <p className="lead">
                Hola, soy <strong>Alonso Rivadeneira</strong>, un joven emprendedor apasionado por el mundo de los aromas. 
                </p>
                <p>
                Comencé este proyecto con la idea de acercar a todos perfumes de calidad a precios accesibles. 
                 Así nació <strong>Perfulandia</strong>, una tienda creada con dedicación, donde cada fragancia está pensada para acompañarte en tus momentos más importantes.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* VISTA CATÁLOGO CON LOGICA ADMIN */}
      {vista === "catalogo" && (
        <Catalogo 
          alSeleccionar={verDetalle} 
          esAdmin={esAdmin} 
          alCrear={irACrear}
          alEditar={irAEditar}
        />
      )}

      {/* VISTA FORMULARIO (Crear/Editar) */}
      {vista === "formulario" && (
        <FormularioPerfume 
          perfumeAEditar={perfumeAEditar} 
          alGuardar={volverAlCatalogo}
          alCancelar={volverAlCatalogo}
        />
      )}

      {vista === "contacto" && <Contacto />}
      
      {/* VISTA AUTH CON CALLBACK */}
      {vista === "auth" && <Auth onLogin={handleLogin} />}

      {/* VISTA DETALLE */}
      {vista === "detalle" && (
        <Detalle 
          idPerfume={perfumeSeleccionado} 
          alVolver={() => setVista("catalogo")} 
        />
      )}

      {/* FOOTER */}
 <footer className="footer">
  <div className="footer-content" style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', textAlign: 'left', paddingBottom: '20px'}}>
    
    <div style={{flex: 1, minWidth: '250px'}}>
      <h3 style={{color: 'var(--accent-gold)', marginBottom: '15px'}}>Perfulandia</h3>
      <p style={{fontSize: '0.9rem', color: '#ccc'}}>La mejor selección de fragancias exclusivas para resaltar tu personalidad.</p>
    </div>

    <div style={{flex: 1, minWidth: '250px'}}>
      <h4 style={{color: 'white', marginBottom: '15px', fontFamily: 'Montserrat'}}>Enlaces Rápidos</h4>
      <ul style={{listStyle: 'none', padding: 0}}>
        <li style={{marginBottom: '8px'}}><a href="#" onClick={() => setVista("inicio")} style={{color: '#ccc', textDecoration: 'none'}}>Inicio</a></li>
        <li style={{marginBottom: '8px'}}><a href="#" onClick={() => setVista("catalogo")} style={{color: '#ccc', textDecoration: 'none'}}>Catálogo</a></li>
        <li><a href="#" onClick={() => setVista("contacto")} style={{color: '#ccc', textDecoration: 'none'}}>Contacto</a></li>
      </ul>
    </div>

    <div style={{flex: 1, minWidth: '250px'}}>
      <h4 style={{color: 'white', marginBottom: '15px', fontFamily: 'Montserrat'}}>Síguenos</h4>
      <div style={{display: 'flex', gap: '15px'}}>
        {/* Usamos emojis o podrías usar iconos reales */}
        <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>📷</span>
        <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>📘</span>
        <span style={{fontSize: '1.5rem', cursor: 'pointer'}}>🐦</span>
      </div>
    </div>
  </div>
  
  <div style={{borderTop: '1px solid #444', paddingTop: '20px', marginTop: '20px', fontSize: '0.8rem', color: '#888'}}>
    &copy; 2025 Perfulandia. Todos los derechos reservados.
  </div>
</footer>

  <a 
    href="https://wa.me/56931483180" 
    target="_blank" 
    rel="noopener noreferrer"
    className="whatsapp-float"
  >
    💬
  </a>

    </div>
  );
}

export default App;