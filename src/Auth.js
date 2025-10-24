/* Importaciones necesarias para el componente de autenticación */
import React, { useState } from "react";
import "./Auth.css";

function Auth() {
  /* Estados para manejar el formulario y la vista */
  const [isLogin, setIsLogin] = useState(true); // Controla si muestra login o registro
  const [email, setEmail] = useState(""); // Almacena el email ingresado
  const [password, setPassword] = useState(""); // Almacena la contraseña ingresada
  const [name, setName] = useState(""); // Almacena el nombre (solo para registro)
  const [error, setError] = useState(""); // Maneja mensajes de error

  /* Función para alternar entre vista de login y registro */
  const toggleView = () => {
    setIsLogin(!isLogin);
    setError(""); // Limpia errores previos
    setEmail(""); // Limpia campos del formulario
    setPassword("");
    setName("");
  };

  /* Validación de correo electrónico */
  const validateEmail = (email) => {
    /* Verifica que el correo termine en @gmail.com o @duocuc.cl */
    return (
      email.endsWith("@gmail.com") || email.endsWith("@duocuc.cl")
    );
  };

  /* Validación de contraseña */
  const validatePassword = (password) => {
    /* Verifica que tenga al menos una mayúscula y más de 6 caracteres */
    return /[A-Z]/.test(password) && password.length > 6;
  };

  /* Manejador del envío del formulario */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* Validación del correo electrónico */
    if (!validateEmail(email)) {
      setError("El correo debe ser @gmail.com o @duocuc.cl");
      return;
    }

    /* Validación de la contraseña */
    if (!validatePassword(password)) {
      setError("La contraseña debe tener una mayúscula y más de 6 caracteres");
      return;
    }

    /* Si las validaciones son exitosas */
    setError("");
    if (isLogin) {
      alert("Inicio de sesión exitoso ✅");
    } else {
      alert("Registro exitoso 🎉");
    }
  };

  return (
    /* Contenedor principal del formulario de autenticación */
    <div className="auth-container">
      <div className="auth-card">
        {/* Título dinámico según la vista actual */}
        <h2>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>
        {/* Mensaje descriptivo según la vista */}
        <p>
          {isLogin
            ? <>Accede a tu cuenta de <strong>Perfulandia</strong></>
            : <>Únete a <strong>Perfulandia</strong> y descubre tu fragancia ideal</>}
        </p>

        {/* Formulario de autenticación */}
        <form onSubmit={handleSubmit}>
          {/* Campo de nombre solo visible en registro */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          {/* Campo de correo electrónico */}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Campo de contraseña */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Mensaje de error si existe */}
          {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

          {/* Botón de envío */}
          <button type="submit" className="btn">
            {isLogin ? "Entrar" : "Registrarme"}
          </button>
        </form>

        {/* Enlace para cambiar entre login y registro */}
        <a href="#" onClick={toggleView}>
          {isLogin
            ? <>¿No tienes cuenta? <strong>Regístrate</strong></>
            : <>¿Ya tienes cuenta? <strong>Inicia sesión</strong></>}
        </a>
      </div>
    </div>
  );
}

/* Exportación del componente */
export default Auth;