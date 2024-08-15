import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../../../components/footer/footer.component";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketMaster from "../../../components/ticketMaster/ticketMaster.component";
import VideoPlayer from "../../core/event/event.component";
import Favorite from "../../../components/favorite/favorite.components";
import descarga1 from "../../../assets/images/descarga1.png";
import descarga2 from "../../../assets/images/git.webp";
import descarga3 from "../../../assets/images/artificial.webp";
import descarga4 from "../../../assets/images/descarga4.png";
import descarga5 from "../../../assets/images/descarga5.png";
import descarga8 from "../../../assets/images/microsoft_visual_studio_code.webp";
import "./styles.scss";
import React from "react";
import FloatingChatButton from "../../../components/FloatingChatButton/FloatingChatButton";
import GuardarVideo from "../../../components/uploadVIdeo/video.component";
const NumberConverter = () => {
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
    <div 
    
    style={{padding: 0}}
    className="game-experiment">
      <div className="music-title">
        <div className="overlay"> </div>
      </div>
      <h1>Your favorite applications </h1>
      <div style={{ color: "#495057" }}>
        <Favorite />
        {/* 
        <div className="container-principal">
          {elements.map((element) => (
            <div
              key={element.id}
              className="row justify-content-center align-items-center "
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
                <span className="text">
                  <small></small> {element.content}
                </span>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
              </button>
            </div>
          ))}
        </div>*/}
        <TicketMaster />
        <VideoPlayer />

        <FloatingChatButton />
        <Footer className="footer" />
      </div>
    </div>
  );
};
export default NumberConverter;
<h1>Upcoming recitals... Spoiler alert damn loser</h1>;
