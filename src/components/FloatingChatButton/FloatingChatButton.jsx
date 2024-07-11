// FloatingChatButton.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./FloatingChatButton.styles.scss";
import ChatWindow from "../ChatIndows/chatWindows.jsx";
const FloatingChatButton = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false); // Estado para controlar la visibilidad de la ventana de chat

  // Función para manejar el clic en el botón
  const handleClick = () => {
    setIsChatOpen(!isChatOpen); // Cambia la visibilidad de la ventana de chat
  };

  // Función para cerrar la ventana de chat
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <button className="floating-chat-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faCommentDots} />
      </button>
      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </>
  );
};

export default FloatingChatButton;
