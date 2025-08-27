import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
      data-bs-scroll="true"
      data-bs-backdrop="false"
    >
      <div className="offcanvas-header bg-body-tertiary">
        <div className="d-flex align-items-center justify-content-center">
          <img
            src="./images/logo_big_scale.png"
            className="logo img-fluid rounded-top"
            alt="LogoScale"
          />
          <h5 className="offcanvas-title p-3" id="offcanvasScrollingLabel">
            Organizer Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Chiudi"
          ></button>
        </div>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <NavLink to="/" className="nav-link">
              Home
              <i className="fa-solid fa-house p-3"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Profilo
              <i className="fa-solid fa-user p-3"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Impostazioni
              <i className="fa-solid fa-user-gear p-3"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Inserisci un nuovo viaggio
              <i className="fa-solid fa-plane p-3"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Contatti
              <i className="fa-solid fa-address-card p-3"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Logout
              <i className="fa-solid fa-arrow-right-from-bracket p-3"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
