import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ticketMaster.styles.scss";
import metallica from "../../assets/images/imagesmetallica.png";
import system3 from "../../assets/images/system3.jpg";
import nirvana from "../../assets/images/nirvana2.jpg";
import green from "../../assets/images/green.jpg";
import linkin from "../../assets/images/linking.jpg";
import pink from "../../assets/images/pink.jpg";

const TicketMaster = () => {
  const initialTickets = [
    {
      id: 1,
      content: "metallica",
      image: metallica,
      path: "www.google.com",
    },
    { id: 2, content: "linkin", image: linkin, path: "www.google.com" },
    { id: 3, content: "nirvana", image: nirvana, path: "www.google.com" },
    { id: 4, content: "greenk", image: green, path: "www.google.com" },
    { id: 5, content: "system3", image: system3, path: "www.google.com" },
    { id: 6, content: "pink", image: pink, path: "www.google.com" },
  ];
  const [elements, setElements] = useState(initialTickets);
  const navigate = useNavigate();
  const handleClick = (id) => {
    const element = elements.find((el) => el.id === id);
    navigate(element.path);

    const newElements = elements.filter((el) => el.id !== id);
    newElements.push(element);
    setElements(newElements);
  };
  return (
    <>
      <h1>¡¡ Get your tickets before they run out !! </h1>
      <div style={{ gap: "1px" }} className="container-principal">
        {elements.map((element) => (
          <div
            style={{}}
            key={element.id}
            className="justify-content-center align-items-center "
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
    </>
  );
};

export default TicketMaster;

/*
<div style={{ gap: "4px" }} className="container-principal">
      {elements.map((element) => (
        <div
          style={{ gap: "4px" }}
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
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </button>
        </div>
      ))}
    </div>*/
