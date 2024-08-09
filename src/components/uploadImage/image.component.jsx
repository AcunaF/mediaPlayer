import React, { useState } from "react";
import "./image.styles.scss";
function GuardarImagen() {
  const [imagen, setImagen] = useState(null);

  const manejarCambio = (e) => {
    setImagen(e.target.files[0]);
  };

  const guardarImagen = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagen", imagen);

    try {
      const respuesta = await fetch("http://localhost:3001/cv/curriculum", {
        method: "POST",
        body: formData,
      });

      if (respuesta.ok) {
        alert("Imagen guardada con éxito");
      } else {
        alert("Error al guardar la imagen");
      }
    } catch (error) {
      console.error("Error al guardar la imagen:", error);
      alert("Error al guardar la imagen");
    }
  };

  return (
    <form onSubmit={guardarImagen}>
      <input type="file" onChange={manejarCambio} />
      <button type="submit">Cargar Archivo</button>
    </form>
  );
}

export default GuardarImagen;
