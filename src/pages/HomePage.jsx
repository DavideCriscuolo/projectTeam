import ListaViaggi from "../components/ListaViaggi";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarBtn from "../components/sidebar/SidebarBtn";
import { plannedTrips } from "../data/trips";

export default function HomePage() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column p-3">
        <h1>Viaggiando con Boolando - Organizer Page</h1>
        <p>
          Visualizza i viaggi attulmente in corso e in programma per ulteriori
          dettagli.
        </p>
        <SidebarBtn />
      </div>

      <Sidebar />
      <ListaViaggi viaggi={plannedTrips} />
    </>
  );
}
