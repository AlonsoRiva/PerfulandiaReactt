import React from "react";
import "./App.css";

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contact-container">
        <h2>Contáctanos</h2>
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
