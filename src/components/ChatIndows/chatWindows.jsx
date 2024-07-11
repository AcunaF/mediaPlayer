import React, { useState } from "react";
import "./chatWindows.styles.scss";

const ChatWindow = ({ onClose }) => {
  const [toMessage, setToMessage] = useState("");
  const [fromMessage, setFromMessage] = useState("");

  const imguser = "https://www.w3schools.com/howto/img_avatar.png";
  const nombre = "Nombre";

  const handleSend = () => {
    // Lógica para enviar el mensaje
    console.log("To:", nombre, imguser, toMessage);
    console.log("From:", fromMessage);
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        <div className="chat-section">
          <label>
            Para {nombre} /{" "}
            <img src={imguser} alt="avatar" className="avatar" />
            <textarea
              value={toMessage}
              onChange={(e) => setToMessage(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="chat-section">
          <label>
            De {nombre} / <img src={imguser} alt="avatar" className="avatar" />
            <textarea
              value={fromMessage}
              onChange={(e) => setFromMessage(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="btn-chat">
          <button className="send-button" onClick={handleSend}>
            Enviar
          </button>
          <button className="back-button">Volver</button>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
