export default function Footer() {
  return (
    <footer className=" bg-body-tertiary ">
      {/* Links */}
      <div className="text-center p-5">
        <ul className="nav justify-content-center mb-2">
          <li className="nav-item">
            <a className="nav-link text-black px-2 " href="#">
              <strong>Home</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-2 " href="#">
              <strong>Features</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-2 " href="#">
              <strong>Pricing</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-2 " href="#">
              <strong>FAQs</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-2 " href="#">
              <strong>Contact Us</strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black px-2 " href="#">
              <strong>About</strong>
            </a>
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
              <a href="#" className="text-decoration-none text-black">
                Europa
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Asia
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                America
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Africa
              </a>
            </li>
          </ul>

          {/* Servizi */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Servizi</strong>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Pacchetti viaggio
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Assistenza
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Hotel & Resort
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Rubrica Organizzatori
              </a>
            </li>
          </ul>

          {/* Esperienze */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Esperienze</strong>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Crociere
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Tour avventura
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Viaggi romantici
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Weekend brevi
              </a>
            </li>
          </ul>

          {/* Info utili */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Info utili</strong>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Assicurazioni viaggio
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Visti & documenti
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Consigli pratici
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Guide locali
              </a>
            </li>
          </ul>

          {/* Azienda */}
          <ul className="list-unstyled">
            <li>
              <strong className="text-dark">Azienda</strong>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Chi siamo
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Lavora con noi
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-black">
                Contatti
              </a>
            </li>
          </ul>
        </div>
        {/* Socials */}
        <ul className="list-unstyled d-flex justify-content-center mt-3">
          <li className="me-3">
            <a href="#" className="text-black text-decoration-none">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
          </li>
          <li className="me-3">
            <a href="#" className="text-black text-decoration-none">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </li>
          <li className="me-3">
            <a href="#" className="text-black text-decoration-none">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-black text-decoration-none">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
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
