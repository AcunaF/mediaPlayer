import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import "./favorite.styles.scss";
import { useNavigate } from "react-router-dom";
import descarga1 from "../../assets/images/descarga1.png";
import descarga2 from "../../assets/images/git.webp";
import descarga3 from "../../assets/images/artificial.webp";
import descarga4 from "../../assets/images/descarga4.png";
import descarga5 from "../../assets/images/descarga5.png";
import descarga8 from "../../assets/images/microsoft_visual_studio_code.webp";

import React from "react";

const Favorite = () => {
  const initialElements = [
    { id: 1, content: "Musica", image: descarga1, path: "/music" },
    { id: 2, content: "Github", image: descarga2, path: "/ebooks" },
    { id: 3, content: "ChatGpt", image: descarga3, path: "/chatGpt" },
    { id: 4, content: "Social Network", image: descarga4, path: "/social" },
    { id: 5, content: "Unplug", image: descarga5, path: "/unplug" },
    { id: 6, content: "To work", image: descarga8, path: "/contact" },
  ];

  const [elements, setElements] = useState(initialElements);
  const navigate = useNavigate();
  const handleClick = (id) => {
    const element = elements.find((el) => el.id === id);
    navigate(element.path);

    const newElements = elements.filter((el) => el.id !== id);
    newElements.push(element);
    setElements(newElements);
  };

  return (
    <div style={{ gap: "4px" }} className="container-principal">
      {elements.map((element) => (
        <div
          style={{ gap: "4px" }}
          key={element.id}
          className="row g-4 justify-content-center align-items-center "
          onClick={() => handleClick(element.id)}
        >
          <button
            style={{ backgroundColor: "black" }}
            className="btn btn-secondary"
            onClick={() => navigate("/music")}
          >
            <span className="text"> {element.content}</span>
            <img
              style={{ width: "100%" }}
              src={element.image}
              alt="Descripción de la imagen"
            />
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </button>
        </div>
      ))}
    </div>
  );
};
export default Favorite;
