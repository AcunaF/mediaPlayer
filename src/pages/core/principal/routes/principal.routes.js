import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberConverter from "../NumberConverter.jsx";
import Music from "../../../../pages/core/principal/musica/music.jsx";
import ContactsPrincipal from "../../../../pages/core/principal/contacts/contacts.principal.jsx";
import ChatComponent from "../../../../components/chat/chatGpt.jsx";
const PrincipalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chatgpt" element={<ChatComponent />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contacts" element={<ContactsPrincipal />} />
        <Route path="/" element={<NumberConverter />} />
        {/* Puedes agregar más rutas según sea necesario */}
      </Routes>
    </BrowserRouter>
  );
};

export default PrincipalRoutes;
