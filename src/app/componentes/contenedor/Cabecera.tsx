import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/4772716.png";
import '../../../assets/css/Cabecera.css';
export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary custom-navbar"  data-bs-theme="light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="El Logo" width={60} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="*">
                  Franquicia
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menus
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/menpf">
                      Pantalon Femenino
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/menpm">
                      Pantalon Masculino
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/mensf">
                      Sueter Femenino
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/mensm">
                      Sueter Masculino
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/menacer">
                  Acerca De
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
