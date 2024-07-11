import React from "react";
import "./games.styles.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const juegos = [
  {
    nombre: "Super Adventure",
    imagen: "./games/unnamed (1).png",
    enlace: "https://example.com/juegos/643x0w.jpg",
  },
  {
    nombre: "Space Shooter",
    imagen: "./games/unnamed.png",
    enlace: "https://example.com/juegos/space_shooter",
  },
  {
    nombre: "Puzzle Mania",
    imagen: "./games/unnamed.webp",
    enlace: "https://example.com/juegos/puzzle_mania",
  },
  {
    nombre: "Racing Fever",
    imagen: "./games/unnamed.webp",
    enlace: "https://example.com/juegos/racing_fever",
  },
  {
    nombre: "Fantasy Quest",
    imagen: "./games/unnamed.webp",
    enlace: "https://example.com/juegos/fantasy_quest",
  },
  {
    nombre: "Card Master",
    imagen: "./games/images.jpeg",
    enlace: "https://example.com/juegos/card_master",
  },
];

const Juegos = () => {
  const navigate = useNavigate();
  const handleBaaack = () => {
    navigate("/");
  };
  const handleBackToUnplug = () => {
    navigate("/unplug");
  };
  return (
    <div className="juegos-section">
      <div className="juegos-grid">
        {juegos.map((juego, index) => (
          <div key={index} className="juego-card">
            <img src={juego.imagen} alt={juego.nombre} />
            <h3>{juego.nombre}</h3>
            <Link to={juego.enlace}>Jugar o Descargar</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juegos;
