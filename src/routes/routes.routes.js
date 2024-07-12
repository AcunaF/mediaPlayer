import React, { Suspense, lazy } from "react";
import PrivateRoute from "../components/Private/privateRoutes.components.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/login/login.components.jsx";
import ContactsPrincipal from "../pages/core/principal/contacts/contacts.principal.jsx";
import NumberConverter from "../pages/core/principal/NumberConverter.jsx";
import Ebooks from "../pages/core/principal/eBooks/ebooks.principal.jsx";
import Playlist from "../pages/core/principal/playlist/playlist.principal.jsx";
import Social from "../pages/core/principal/sNetwork/Social.principal.jsx";
import Unplug from "../pages/core/principal/unplug/unplug.principal.jsx";
import Juegos from "../components/games/games.jsx";
import Messages from "../components/Messages/messages.component.jsx";
import Advertisement from "../pages/core/publicidad/publisher.components.jsx";

// Lazy loading de componentes
const RegisterForm = lazy(() =>
  import("../components/registerForm/registerForm.components.jsx")
);
<Route path="/home" element={<NumberConverter />} />;
const Home = lazy(() => import("../pages/core/principal/NumberConverter.jsx"));
const Index = lazy(() => import("../pages/core/index.jsx"));
const Music = lazy(() => import("../pages/core/principal/musica/music.jsx"));

function RoutesComponent() {
  return (
    /*
     fallback de Suspense: Proporciona un componente o un marcado que se mostrará mientras los componentes están cargando.
     Esto mejora la experiencia del usuario al proporcionar una indicación visual de que el contenido está en proceso de carga.
     Desempeño: La carga diferida es especialmente útil para mejorar el tiempo de carga inicial de tu aplicación,
     ya que reduce el tamaño del paquete inicial que el navegador necesita descargar.
     */

    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        {/* Muestra un indicador de carga mientras los componentes se están cargando */}
        <Routes>
          <Route path="/principal" element={<Index />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Login />} />

          {/*Principal*/}
          <Route path="/message" element={<Messages />} />
          <Route path="/chatgpt" element={<Advertisement />} />
          <Route path="/music" element={<Music />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/contact" element={<ContactsPrincipal />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/social" element={<Social />} />
          <Route path="/unplug" element={<Unplug />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RoutesComponent;
/*  */
