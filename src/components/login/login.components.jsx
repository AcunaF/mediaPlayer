import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagen3 from "../../assets/images/banner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.styles.scss";
import "../../routes/routes.routes.js";
import SuccessModal from "../modal/modalSuccess.jsx";
import ErrorModal from "../modal/modalError.jsx";
import TicketMaster from "../ticketMaster/ticketMaster.component.jsx";
import Footer from "../footer/footer.component.jsx";
import Advertisement from "../../pages/core/publicidad/publisher.components.jsx";

function Login() {
  const [usuario, setUsuario] = useState({
    correo: "test01@test.te.st",
    password: "Test01",
  });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalError, setShowModalError] = useState(false);
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar si el correo está vacío antes de enviar
    if (!usuario.correo) {
      setError("Email is required");
      return;
    }
    console.log("usuario", usuario);
    await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setShowModal(true); // Muestra el modal solo si la respuesta es exitosa
          return response.json();
        } else {
          throw new Error("Login failed"); // Lanza un error si la respuesta no es exitosa
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Login failed"); // Establece un mensaje de error
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex">
        <section className="py-3 py-md-5">
          <div className="col">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <div className="card border border-dark-subtle rounded-3 shadow-m form-dark">
                  <div className="card-body p-3 p-md-4 p-xl-5">
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="correo">Email</label>
                        <div className="form-floating">
                          <input
                            type="mail"
                            className="form-control"
                            name="correo"
                            id="correo"
                            onChange={handleChange}
                            required
                            value={usuario.correo}
                          />
                        </div>
                      </div>
                      <label htmlFor="password">Password</label>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            onChange={handleChange}
                            required
                            value={usuario.password}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className=" looged d-flex gap-2 justify-content-between">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="rememberMe"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label text-secondary"
                              htmlFor="rememberMe"
                            >
                              <small>Keep me logged in</small>
                            </label>
                          </div>
                          <a
                            href="#!"
                            className="link-primary text-decoration-none"
                          >
                            <small> Forgot password?</small>
                          </a>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex d-grid my-3">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            style={{ backgroundColor: "#f26522" }}
                          >
                            Log in
                          </button>
                          <button
                            onClick={handleBack}
                            className="btn btn-primary"
                          >
                            Back
                          </button>
                        </div>
                      </div>
                      <div className="col-12">
                        <p className="m-0 text-secondary text-center">
                          Don't have an account?
                          <Link
                            to="/register"
                            className="link-primary text-decoration-none"
                          >
                            Sign up
                          </Link>
                        </p>
                      </div>
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Login;
/* <div className="SocialNetwork">
        <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          <span class="ms-2 fs-6">Instagram</span>
        </a>
        <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          <span class="ms-2 fs-6">Facebook</span>
        </a>
        <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
          <span class="ms-2 fs-6">Twitter</span>
        </a>
      </div> */
