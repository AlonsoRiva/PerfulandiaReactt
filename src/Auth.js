import React, { useState } from "react";
import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const toggleView = () => {
    setIsLogin(!isLogin);
    setError("");
    setEmail("");
    setPassword("");
    setName("");
  };

  const validateEmail = (email) => {
    return (
      email.endsWith("@gmail.com") || email.endsWith("@duocuc.cl")
    );
  };

  const validatePassword = (password) => {
    return /[A-Z]/.test(password) && password.length > 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar email
    if (!validateEmail(email)) {
      setError("El correo debe ser @gmail.com o @duocuc.cl");
      return;
    }

    // Validar contraseña
    if (!validatePassword(password)) {
      setError("La contraseña debe tener una mayúscula y más de 6 caracteres");
      return;
    }

    // Si todo está bien
    setError("");
    if (isLogin) {
      alert("Inicio de sesión exitoso ✅");
    } else {
      alert("Registro exitoso 🎉");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</h2>
        <p>
          {isLogin
            ? <>Accede a tu cuenta de <strong>Perfulandia</strong></>
            : <>Únete a <strong>Perfulandia</strong> y descubre tu fragancia ideal</>}
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

          <button type="submit" className="btn">
            {isLogin ? "Entrar" : "Registrarme"}
          </button>
        </form>

        <a href="#" onClick={toggleView}>
          {isLogin
            ? <>¿No tienes cuenta? <strong>Regístrate</strong></>
            : <>¿Ya tienes cuenta? <strong>Inicia sesión</strong></>}
        </a>
      </div>
    </div>
  );
}

export default Auth;
