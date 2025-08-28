import "./../css/logos.css";
import SidebarBtn from "./sidebar/SidebarBtn";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm font_family">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            className="me-2"
            src="/images/Logo.png"
            alt="AgencyLogo"
            style={{ height: "100px" }}
          />
          <span className="fw-bold bg_blue ms-3">MyAgency</span>
        </NavLink>
        <SidebarBtn />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-primary " to="/">
                <strong>Home</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-primary" to="/features">
                <strong>Features</strong>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link text-primary" to="#">
                Pricing
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
