import React, { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    contraseña: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puede ser la validación de usuario y contraseña
    if (formData.usuario === "admin" && formData.contraseña === "1234") {
      window.location.href = "http://localhost:5173/index.html"; // Aquí pones el URL del proyecto al que quieres redirigir
    } else {
      alert("Usuario o Contraseña incorrectos");
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h2 className="form-title">Formulario de Login</h2>
        <img
          src="/assets/futuristic-decor.png"
          alt="Imagen decorativa"
          className="form-image"
        />
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
          />
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
