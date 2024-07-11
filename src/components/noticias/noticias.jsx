import React from "react";
import "./noticias.styles.scss";
import { Link } from "react-router-dom";

const noticias = [
  {
    id: 1,
    titulo: "Nuevas actualizaciones en la aplicación Unplug",
    imagen: "https://example.com/noticia1.jpg",
    resumen: "Descubre las nuevas características que hemos añadido...",
    enlace: "/noticias/1",
  },
  {
    id: 2,
    titulo: "Lanzamiento del nuevo juego 'Super Adventure'",
    imagen: "https://example.com/noticia2.jpg",
    resumen: "Explora el emocionante mundo de Super Adventure y más...",
    enlace: "/noticias/2",
  },
  // Añadir más noticias según sea necesario
];

const Noticias = () => {
  return (
    <div className="noticias-section">
      <h1>Noticias Recientes</h1>
      <div className="noticias-grid">
        {noticias.map((noticia) => (
          <div key={noticia.id} className="noticia-card">
            <img src={noticia.imagen} alt={noticia.titulo} />
            <div className="noticia-info">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.resumen}</p>
              <Link to={noticia.enlace}>Leer más</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
