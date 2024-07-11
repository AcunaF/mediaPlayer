import React from "react";
import "./videos.styles.scss";

const videos = [
  {
    id: 1,
    titulo: "Introducción a Unplug",
    miniatura: "./imagesactualizacion.png",
    plataforma: "youtube",
    enlace: "https://www.youtube.com/watch?v=KWX8lzzzrzA",
  },
  {
    id: 2,
    titulo: "Gameplay de Super Adventure",
    miniatura: "./capsule_616x353.jpg",
    plataforma: "youtube",
    enlace: "https://www.youtube.com/watch?v=D1bvikMkNOk",
  },
  // Añadir más videos según sea necesario
];

const Videos = () => {
  return (
    <div className="videos-section">
      <h1>Videos Populares</h1>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <a href={video.enlace} target="_blank" rel="noopener noreferrer">
              <img src={video.miniatura} alt={video.titulo} />
              <h3>{video.titulo}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
