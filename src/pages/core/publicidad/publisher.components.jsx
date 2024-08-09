import "./publisher.styles.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaLinkedin,
  FaBriefcase,
  FaLaptop,
  FaSearch,
  FaStar,
} from "react-icons/fa";
const Advertisement = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/principal");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await axios.post("http://localhost:3001/cv/curriculum", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Currículum recibido y analizado correctamente");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario");
    }
  };
  return (
    <>
      <div style={{ height: "auto" }} className="ticketmaster">
        <div className="d-flex">
          <div className="game-experiment">
            <div style={{ color: "white", width: "auto" }} className="row">
              <h1>Ofertas laborales</h1>
              <div className="offers-table">
                <table>
                  <thead>
                    <tr>
                      <th>Tipo de Oferta</th>
                      <th>Descripción</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Del mes</td>
                      <td>Descripción de la oferta del mes</td>
                    </tr>
                    <tr>
                      <td>De la semana</td>
                      <td>Descripción de la oferta de la semana</td>
                    </tr>
                    <tr>
                      <td>Del día</td>
                      <td>Descripción de la oferta del día</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="container-fluid">
              <h1>Subi tu CV</h1>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                  <label
                    style={{ color: "#f26522", margin: "20px" }}
                    htmlFor="nombre"
                  >
                    Nombre
                  </label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div>
                  <label
                    style={{ color: "#f26522", margin: "20px" }}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label
                    style={{ color: "#f26522", margin: "20px" }}
                    htmlFor="telefono"
                  >
                    Teléfono
                  </label>
                  <input type="tel" id="telefono" name="telefono" required />
                </div>
                <div>
                  <label
                    style={{ color: "#f26522", margin: "20px" }}
                    htmlFor="especialidad"
                  >
                    Especialidad
                  </label>
                  <select id="especialidad" name="especialidad" required>
                    <option value="Backend">Desarrollador Back</option>
                    <option value="Frontend">Desarrollador Front</option>
                    <option value="Fullstack">Desarrollador Fullstack</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>
                <div>
                  <label
                    style={{ color: "#f26522", margin: "20px" }}
                    htmlFor="seniority"
                  >
                    Señority
                  </label>
                  <select id="seniority" name="seniority" required>
                    <option value="Trainee">Trainee</option>
                    <option value="Junior">Junior</option>
                    <option value="Ssr">Ssr</option>
                    <option value="Senior">Sr</option>
                  </select>
                </div>
                <div>
                  <label
                    style={{ color: "#f26522", margin: "20px" }}
                    htmlFor="curriculum"
                  >
                    Carga tu CV
                  </label>
                  <input
                    type="file"
                    id="curriculum"
                    name="curriculum"
                    required
                  />
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>

            <div className="footer">
              <button onClick={handleBack}>Back to principal</button>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#2a2a2a", padding: "20px" }}
            className=""
          >
            <h1 className="main-pages-title">Principales Páginas</h1>
            <div className="game-experiment">
              <a
                style={{ color: "white", fontSize: "1.5rem" }}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                style={{ color: "white", fontSize: "1.5rem" }}
                href="https://www.zonajobs.com.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBriefcase /> Zona Jobs
              </a>
              <a
                style={{ color: "white", fontSize: "1.5rem" }}
                href="https://www.computrabajo.com.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLaptop /> Computrabajo
              </a>
              <a
                style={{ color: "white", fontSize: "1.5rem" }}
                href="https://www.indeed.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSearch /> Indeed
              </a>
              <a
                style={{ color: "white", fontSize: "1.5rem" }}
                href="https://www.monster.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaStar /> Monster
              </a>
            </div>
            <h1></h1>
            <div className="game-experiment">
              <h2 style={{ color: "white", fontSize: "1.5rem" }}>
                Busqueda por filtros
              </h2>
              <form className="form-result">
                <select>
                  <option value="">Seleccione categoría</option>
                  <option value="Backend">Backend</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Fullstack">Fullstack</option>
                  <option value="DevOps">Devops</option>
                </select>{" "}
                <select>
                  <option value="">Seleccione tecnologia</option>
                  <option value="back">Javascript</option>
                  <option value="front">Java</option>
                  <option value="fullstack">Pyton</option>
                  <option value="fullstack">C#</option>
                </select>{" "}
                <select>
                  <option value="">Tipo de trabajo prefer</option>
                  <option value="back">Remoto</option>
                  <option value="front">Presecial</option>
                  <option value="fullstack">Hibrido</option>
                  <option value="fullstack">Freelance</option>
                </select>{" "}
                <select>
                  <option value="">Selecicone Señority pref</option>
                  <option value="back">Trainee</option>
                  <option value="front">Junio</option>
                  <option value="fullstack">Ssr</option>
                  <option value="fullstack">Sr</option>
                </select>{" "}
                <input type="text" placeholder="Pretencion salarial" />
                <input type="text" placeholder="Buscar por ubicación" />
                <button type="submit" className="button">
                  Buscar
                </button>
              </form>
            </div>
            <div>
              <h2 style={{ color: "white", fontSize: "1.0rem" }}>
                Resultado Busqueda
              </h2>
              <div style={{ color: "white" }} className="search-result">
                <div className="search-result-item">
                  <h4>Desarrollador Fullstack</h4>
                  <small>Descripción de la oferta</small>
                  <button type="submit">Aplicar</button>
                </div>
                <div className="search-result-item">
                  <h4>Desarrollador Front</h4>
                  <small>Descripción de la oferta</small>
                  <button type="submit">Aplicar</button>
                </div>
                <div className="search-result-item">
                  <h3>Desarrollador Back</h3>
                  <small>Descripción de la oferta</small>
                  <button type="submit">Aplicar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Advertisement;
