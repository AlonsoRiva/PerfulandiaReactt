/* Importaciones necesarias para el funcionamiento de la aplicación */
import React, { useState } from "react";
import "./App.css";
import Catalogo from "./Catalogo";
import Contacto from "./Contacto";
import Auth from "./Auth";

function App() {
  /* Estado para controlar la navegación entre diferentes vistas */
  const [vista, setVista] = useState("inicio");

  return (
    <div className="App">
      {/* NAVBAR - Barra de navegación principal */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo de la tienda */}
          <h1 className="logo">Perfulandia</h1>
          {/* Lista de enlaces de navegación */}
          <ul className="nav-links">
            {/* Cada botón cambia el estado 'vista' y tiene una clase active cuando está seleccionado */}
            <li>
              <button
                onClick={() => setVista("inicio")}
                className={vista === "inicio" ? "active" : ""}
              >
                Inicio
              </button>
            </li>
            {/* ... resto de botones de navegación ... */}
          </ul>
        </div>
      </nav>

      {/* Sección de inicio - Solo se muestra cuando vista === "inicio" */}
      {vista === "inicio" && (
        <>
          {/* Hero Section - Sección principal con mensaje de bienvenida */}
          <section className="hero">
            <div className="hero-text">
              <h2>Bienvenido a Perfulandia</h2>
              <p>El aroma que define tu estilo</p>
              {/* Botón CTA que redirige al catálogo */}
              <button className="btn-comprar" onClick={() => setVista("catalogo")}>
                Ver Catálogo
              </button>
            </div>
          </section>

          {/* Features Section - Muestra las características principales del negocio */}
          <section className="features">
            <h2>¿Por qué elegirnos?</h2>
            {/* Grid de características con 3 tarjetas */}
            <div className="features-grid">
              {/* Cada feature-card representa una característica del negocio */}
              <div className="feature-card">
                {/* Iconos e información de características */}
                <img src="/img/icono1.png" alt="Fragancias Exclusivas" className="feature-icon" />
                <h3>Fragancias Exclusivas</h3>
                <p>Perfumes únicos y originales de las mejores marcas.</p>
              </div>
              {/* ... otras feature-cards ... */}
            </div>
          </section>

          {/* About Section - Información sobre el fundador y la empresa */}
          <section className="about">
            <div className="about-container">
              {/* Contenedor de imagen del fundador */}
              <div className="about-image">
                <img src="/alonso.jpg" alt="Fundador Alonso Rivadeneira" />
              </div>
              {/* Texto biográfico y descripción de la empresa */}
              <div className="about-text">
                <p class="lead">
                  Hola, soy <strong>Alonso Rivadeneira</strong>, un joven emprendedor apasionado por el mundo de los aromas. 
                </p>
                {/* ... resto del texto ... */}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Renderizado condicional de componentes según la vista seleccionada */}
      {vista === "catalogo" && <Catalogo />}
      {vista === "contacto" && <Contacto />}
      {vista === "auth" && <Auth />}

      {/* Footer - Pie de página con información básica */}
      <footer className="footer">
        <p>Perfulandia - 2025</p>
      </footer>
    </div>
  );
}

/* Exportación del componente para su uso en otras partes de la aplicación */
export default App;