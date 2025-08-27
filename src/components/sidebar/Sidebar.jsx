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
      <div className="offcanvas-header bg-body-tertiary p-3">
        <h5 className="offcanvas-title p-1" id="offcanvasScrollingLabel">
          Organizer Menu
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Chiudi"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Profilo
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Impostazioni
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Contatti
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
