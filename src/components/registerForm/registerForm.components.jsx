import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerForm.styles.scss";
import Footer from "../footer/footer.component";

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
    apellido: "",
    rol: "",
  });

  const handleback = () => {
    navigate("/login");
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando datos:", JSON.stringify(formData));

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.text(); // Intenta leer el cuerpo de la respuesta como texto
        console.error("Error en la respuesta:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("No se recibió JSON válido");
      }
      // Procesa la respuesta aquí
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Maneja el error en la UI aquí, por ejemplo, mostrando un mensaje de error al usuario
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
          <div className="bg-white p-4 p-md-5 rounded shadow-sm">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h1 className="h3">Registration</h1>
                  <h3 className="fs-6 fw-normal text-secondary m-0">
                    Enter your details to register
                  </h3>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} action="#!">
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12">
                  <label htmlFor="nombre" className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    id="nombre"
                    placeholder="First Name"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="apellido" className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellido"
                    id="apellido"
                    placeholder="Last Name"
                    required
                    value={formData.apellido}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="correo" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="correo"
                    id="correo"
                    placeholder="name@example.com"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="password" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    autocomplete="current-password"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="rol" className="form-label">
                    Rol <span className="text-danger">*</span>
                  </label>
                  <select
                    type="text"
                    className="form-control"
                    name="rol"
                    id="rol"
                    required
                    value={formData.rol}
                    onChange={handleChange}
                  >
                    <option value="">Select a role</option>
                    <option value="ADMIN_ROLE">ADMIN_ROLE</option>
                    <option value="USER_ROLE">USER_ROLE</option>
                    <option value="VENTAS_ROLE">VENTAS_ROLE</option>
                  </select>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="iAgree"
                      id="iAgree"
                      required
                    />
                    <label
                      className="form-check-label text-secondary"
                      htmlFor="iAgree"
                    >
                      I agree to the{" "}
                      <a
                        href="#!"
                        className="link-primary text-decoration-none"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-lg btn-primary"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </form>
            <div className="d-grid">
              <button
                className="btn btn-lg btn-primary"
                type="submit"
                onClick={handleback}
              >
                Back
              </button>
            </div>
            <div>
              <Footer className="mt-5 text-center text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
