import ListaViaggi from "../components/ListaViaggi";
import Sidebar from "../components/sidebar/Sidebar";
import "../css/logos.css";
import { plannedTrips } from "../data/trips";

export default function HomePage() {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        <img
          className="logo_big"
          src="/images/logo_big_scale.png"
          alt="AgencyLogoBig"
        />
        <div className="d-flex justify-content-center align-items-center flex-column p-3 text-white">
          <h1>Viaggiando con Boolando - Organizer Page</h1>
          <p>
            Visualizza i viaggi attulmente in corso e in programma per ulteriori
            dettagli.
          </p>
        </div>
      </div>

      {/* <Sidebar /> */}
      <ListaViaggi viaggi={plannedTrips} />
    </>
  );
}
