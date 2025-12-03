import React, { useState } from "react";
import "./Auth.css";

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toggleView = () => {
    setIsLogin(!isLogin);
    setError("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // URL oficial de la API
    const url = isLogin 
      ? "https://reqres.in/api/login" 
      : "https://reqres.in/api/register";

    const payload = { email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Agregamos tu header si te funciona mejor con él
          "x-api-key": "reqres_1aad58804860460da65851f23f273333" 
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // 1. Guardar Token en el navegador (Persistencia)
        localStorage.setItem("token", data.token);
        
        // 2. Definir Rol Real según el correo
        // Reqres no devuelve roles, así que definimos que el correo oficial es ADMIN
        let userRole = "USER";
        if (email === "eve.holt@reqres.in") {
          userRole = "ADMIN";
        }

        // Guardamos datos del usuario
        localStorage.setItem("rol", userRole);
        localStorage.setItem("usuario", email);

        // 3. Avisar a la App que el login fue exitoso
        onLogin(userRole); 
      } else {
        setError(data.error || "Credenciales incorrectas");
      }

    } catch (err) {
      console.error(err);
      setError("Error de conexión. Intenta nuevamente.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Acceso Usuarios" : "Registro"}</h2>
        
        <div style={{fontSize:'0.8rem', color:'#555', marginBottom:'15px', padding:'10px', background:'#f4f4f4', borderRadius:'5px', textAlign: 'left'}}>
          <p style={{margin: '0 0 5px 0'}}><strong>👑 ADMIN:</strong></p>
          <p style={{margin: '0 0 10px 0'}}>✉️ eve.holt@reqres.in<br/>🔑 cityslicka</p>
          
          <p style={{margin: '0 0 5px 0', borderTop: '1px solid #ccc', paddingTop: '5px'}}><strong>👤 USER (Normal):</strong></p>
          <p style={{margin: 0}}>✉️ lindsay.ferguson@reqres.in<br/></p>
        </div>

        <form onSubmit={handleSubmit}>
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
          
          {error && <div style={{ color: "red", marginTop: "10px" }}>⚠️ {error}</div>}
          
          <button type="submit" className="btn" style={{marginTop:'20px'}}>
            {isLogin ? "Ingresar" : "Registrarme"}
          </button>
        </form>
        
        <a href="#" onClick={toggleView} style={{marginTop:'15px', display:'block'}}>
          {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </a>
      </div>
    </div>
  );
}

export default Auth;