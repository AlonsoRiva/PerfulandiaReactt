import React, { useState } from "react";
import "./App.css";
import Catalogo from "./Catalogo";
import Contacto from "./Contacto";
import Auth from "./Auth";

function App() {
  const [vista, setVista] = useState("inicio");

  return (
    <div className="App">
      {/* NAVBAR */}
<nav className="navbar">
  <div className="nav-container">
    <h1 className="logo">Perfulandia</h1>
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
      <li>
        <button
          onClick={() => setVista("auth")}
          className={vista === "auth" ? "active" : ""}
        >
          Login / Registro
        </button>
      </li>
    </ul>
  </div>
</nav>


      {/* HOME (Tu contenido original del inicio) */}
      {vista === "inicio" && (
        <>
          {/* Aquí dejas todo tu hero, features y about */}
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
                <p class="lead">
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

      {/* OTRAS VISTAS */}
      {vista === "catalogo" && <Catalogo />}
      {vista === "contacto" && <Contacto />}
      {vista === "auth" && <Auth />}

      {/* FOOTER */}
      <footer className="footer">
        <p>Perfulandia - 2025</p>
      </footer>
    </div>
  );
}

export default App;
