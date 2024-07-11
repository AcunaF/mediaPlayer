import React from "react";
import "./video.styles.scss";
function GuardarVideo() {
  const manejarCambio = (e) => {};

  const guardarImagen = async (e) => {
    <p>proximamente</p>;
  };

  return (
    <form onSubmit={guardarImagen}>
      <input type="file" onChange={manejarCambio} />
      <button type="submit">Guardar Video</button>
    </form>
  );
}

export default GuardarVideo;
