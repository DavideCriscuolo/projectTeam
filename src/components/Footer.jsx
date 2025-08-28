import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-body-tertiary ">
      {/* Links */}
      <div className="text-center p-5">
        <ul className="nav justify-content-center mb-2">
          <li className="nav-item">
            <NavLink className="nav-link text-black px-2 " to="/">
              <strong>Home</strong>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-black px-2 " to="/features">
              <strong>Features</strong>
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link text-black px-2 " to="#">
              <strong>Pricing</strong>
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link text-black px-2 " to="#">
              <strong>FAQs</strong>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-black px-2 " to="#">
              <strong>Contact Us</strong>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-black px-2 " to="#">
              <strong>About</strong>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="container text-center">
        <div className="d-flex justify-content-around flex-wrap">
          {/* Destinazioni */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Destinazioni</strong>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Europa
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Asia
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                America
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Africa
              </NavLink>
            </li>
          </ul>

          {/* Servizi */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Servizi</strong>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Pacchetti viaggio
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Assistenza
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Hotel & Resort
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Rubrica Organizzatori
              </NavLink>
            </li>
          </ul>

          {/* Esperienze */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Esperienze</strong>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Crociere
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Tour avventura
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Viaggi romantici
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Weekend brevi
              </NavLink>
            </li>
          </ul>

          {/* Info utili */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Info utili</strong>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Assicurazioni viaggio
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Visti & documenti
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Consigli pratici
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Guide locali
              </NavLink>
            </li>
          </ul>

          {/* Azienda */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Azienda</strong>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Chi siamo
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Lavora con noi
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="text-decoration-none text-black">
                Contatti
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Socials */}
        <ul className="list-unstyled d-flex justify-content-center mt-3">
          <li className="me-3">
            <NavLink to="#" className="text-black text-decoration-none">
              <i className="fab fa-facebook-f fa-lg"></i>
            </NavLink>
          </li>
          <li className="me-3">
            <NavLink to="#" className="text-black text-decoration-none">
              <i className="fab fa-instagram fa-lg"></i>
            </NavLink>
          </li>
          <li className="me-3">
            <NavLink to="#" className="text-black text-decoration-none">
              <i className="fab fa-twitter fa-lg"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-black text-decoration-none">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center text-black py-3">
        <span className="">© 2025 Company, Inc</span>
      </div>
    </footer>
  );
}
