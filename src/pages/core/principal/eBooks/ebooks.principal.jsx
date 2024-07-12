import React from "react";
import { TbBackground, TbCheck } from "react-icons/tb";
import "./ebooks.styles.scss";
import { useNavigate } from "react-router-dom";

const CandidateCard = ({ candidate }) => (
  <div
    className="candidate-card"
    style={{
      maxWidth: "540px",
      border: "2px solid #1a1a1a",
      boxShadow: "5px 5px 5px black",
      textAlign: "center",
      textShadow: "0.5px 0.5px 0.5px black",
    }}
  >
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          src={candidate.img}
          className="card-img"
          alt={candidate.name}
          height="150px"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text">
            Nombre: <small>{candidate.name}</small>
          </p>
          <p className="card-text">
            Apellido: <small>{candidate.lastname}</small>
          </p>
          <p className="card-text">
            Correo: <small>{candidate.email}</small>
          </p>
          <p className="card-text">
            Cargo: <small>{candidate.position}</small>
          </p>
          <p className="card-text">
            Señority: <small>{candidate.seniority}</small>
          </p>
          <p className="card-text">
            Habilidades: <small>{candidate.skills}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Ebooks = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/principal");
  };

  const candidates = [
    {
      img: "/Unknown_person.jpg",
      name: "Facundo",
      lastname: "Acuña",
      email: "facu@facu.com.ar",
      position: "Developer Frontend",
      seniority: "Alguno",
      skills: "Muchas",
    },
    {
      img: "/profile.jpg",
      name: "Facundo",
      lastname: "Acuña",
      email: "facu@facu.com.ar",
      position: "Developer Frontend",
      seniority: "Alguno",
      skills: "Muchas",
    },
    {
      img: "/newprofile.png",
      name: "Facundo",
      lastname: "Acuña",
      email: "facu@facu.com.ar",
      position: "Developer Frontend",
      seniority: "Alguno",
      skills: "Muchas",
    },
  ];

  return (
    <div className="row container">
      <h1>Get your next candidate</h1>
      <div className="container">
        <div className="filters" style={{ gap: "1rem", display: "grid" }}>
          <select>
            <option value="">Seleccione categoría</option>
            <option value="back">Desarrollador Back</option>
            <option value="front">Desarrollador Front</option>
            <option value="fullstack">Desarrollador Fullstack</option>
          </select>
          <select>
            <option value="">Seleccione seniority</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
          <select>
            <option value="">Seleccione habilidades</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
          </select>
          <input type="text" placeholder="Buscar por nombre" />
          <button type="submit">Buscar</button>
          <input type="text" placeholder="Buscar por apellido" />
          <button type="submit">Buscar</button>
          <input type="text" placeholder="Buscar por correo" />
          <button type="submit">Buscar</button>
          <input type="text" placeholder="Buscar por cargo" />
          <button type="submit">Buscar</button>
        </div>
        <h1>Search result</h1>
        <div className="card-result mt-4">
          {candidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} />
          ))}
        </div>

        <div className="line"></div>
      </div>
      <button type="submit" onClick={handleBack}>
        Back to principal <TbBackground />
      </button>
    </div>
  );
};

export default Ebooks;
