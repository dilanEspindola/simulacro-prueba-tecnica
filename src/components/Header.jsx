import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "no-active")}
        >
          Lista de productos
        </NavLink>
        <NavLink
          to="/registrar-producto"
          className={({ isActive }) => (isActive ? "active" : "no-active")}
        >
          Registrar Productos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
