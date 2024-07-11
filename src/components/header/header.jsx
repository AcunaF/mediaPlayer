import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom"; // Asumiendo que se usa React Router para la navegación

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Unplug</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/juegos">Juegos</Link>
          </li>
          <li>
            <Link to="/noticias">Noticias</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
