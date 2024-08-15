import React, { useEffect, useState } from "react";
import { TbBackground } from "react-icons/tb";
import "./ebooks.styles.scss";
import { useNavigate } from "react-router-dom";
import imgUSer from "../../../../assets/images/artificial.jpg";

const Ebooks = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    seniority: "",
    skill: "",
    resultado: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = candidates.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBack = () => {
    navigate("/principal");
  };

  const handleReset = () => {
    setFilters({
      category: "",
      seniority: "",
      skill: "",
      resultado: "",
    });
    fetchCandidates(); // Refresca la lista después del reset
  };

  const fetchCandidates = async () => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(
        `http://localhost:3001/cv/filter?${queryParams}`
      );
      const data = await response.json();
      setCandidates(data);

      // Console log para palabras positivas y negativas
      data.forEach((candidate) => {
        console.log(`Candidato: ${candidate.nombre}`);
        console.log("Palabras Positivas:", candidate.positiveWords);
        console.log("Palabras Negativas:", candidate.negativeWords);
      });
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, [filters]);

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/cv/delete-cv/${id}`, {
        method: 'DELETE',
      });
      // Refresca la lista después de eliminar
      fetchCandidates();
    } catch (error) {
      console.error("Error deleting candidate:", error);
    }
  };

  return (
    <>
      <div className="row container">
        <h1>Get your next candidate</h1>
        <div className="container">
          <div className="filters" style={{ gap: "1rem", display: "grid" }}>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilter}
            >
              <option value="">Seleccione categoría</option>
              <option value="Backend">Desarrollador Back</option>
              <option value="Frontend">Desarrollador Front</option>
              <option value="Fullstack">Desarrollador Fullstack</option>
              <option value="DevOps">DevOps</option>
              <option value="Project Manager">Project Manager</option>
            </select>
            <select
              name="seniority"
              value={filters.seniority}
              onChange={handleFilter}
            >
              <option value="">Seleccione seniority</option>
              <option value="Trainee">Trainee</option>
              <option value="Junior">Junior</option>
              <option value="Ssr">Ssr</option>
              <option value="Senior">Senior</option>
            </select>
            <select name="skill" value={filters.skill} onChange={handleFilter}>
              <option value="">Seleccione habilidades</option>
              <option value="javascript">JavaScript</option>
              <option value="Java">Java</option>
              <option value="etc">etc</option>
            </select>
            <select
              name="resultado"
              value={filters.resultado}
              onChange={handleFilter}
            >
              <option value="">Seleccione Resultado</option>
              <option value="Habilitado">Habilitado</option>
              <option value="No Habilitado">No Habilitado</option>
              <option value="Pendiente de análisis">
                Pendiente de análisis
              </option>
            </select>
          </div>
          <div className="container">
            <button
              style={{ margin: 2 }}
              type="button"
              onClick={fetchCandidates}
            >
              Buscar
            </button>
            <button style={{ margin: 2 }} type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
        <h1>Search result</h1>

        <div className="card-result mt-4">
          {currentPosts.map((candidate, index) => (
            <div
              key={index}
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
                    src={imgUSer}
                    className="card-img"
                    alt={""}
                    height="150px"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">Nombre: {candidate.nombre}</p>
                    <p className="card-text">
                      Especialidad: {candidate.especialidad}
                    </p>
                    <p className="card-text">Correo: {candidate.email}</p>
                    <p className="card-text">Teléfono: {candidate.telefono}</p>
                    <p className="card-text">
                      Resultado: {candidate.resultado}
                    </p>
                    <p className="card-text">
                      Seniority: {candidate.seniority}
                    </p>
                    <p className="card-text">
                      Curriculum:{" "}
                      <a
                        type="submit"
                        href={`http://localhost:3001/cv/download-cv/${candidate._id}`}
                        rel="noopener noreferrer"
                      >
                        Ver Curriculum de {candidate.nombre}
                      </a>
                    </p>
                  </div>
                  <button 
                    className="btn btn-secondary" 
                    type="button" 
                    onClick={() => handleDelete(candidate._id)}
                  >
                    Eliminar Perfil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(candidates.length / postsPerPage) }, (_, i) => (
            <button 

              key={i + 1} 
              onClick={() => paginate(i + 1)}
              className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <button type="button" onClick={handleBack}>
        Back to principal <TbBackground />
      </button>
    </>
  );
};

export default Ebooks;
