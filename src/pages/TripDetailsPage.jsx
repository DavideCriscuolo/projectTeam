import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { plannedTrips } from "../data/trips";
import { participants } from "../data/participants";
import SearchBar from "../components/SearchBar";

export default function TripDetailsPage() {
  const { id } = useParams();
  const [searchFilters, setSearchFilters] = useState({ nome: "", cognome: "" });

  const { nomeViaggio, destinazione, dataInizio, dataFine, img } =
    plannedTrips[id];
  const startDate = new Date(dataInizio).toLocaleDateString();
  const endDate = new Date(dataFine).toLocaleDateString();






  const partecipanti = participants.filter((element) => {
    if (element.idViaggio == id) {
      return element;
    }
  });

  const filteredPartecipanti = useMemo(() => {
    return partecipanti.filter((participant) => {
      const matchesNome = searchFilters.nome === "" ||
        participant.nome.toLowerCase().includes(searchFilters.nome.toLowerCase());
      const matchesCognome = searchFilters.cognome === "" ||
        participant.cognome.toLowerCase().includes(searchFilters.cognome.toLowerCase());

      return matchesNome && matchesCognome;
    });
  }, [partecipanti, searchFilters]);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <>
      <div className="mt-5 container">
        <p className="py-3 fs-1 ">{nomeViaggio}</p>
        <div className="card">

          <div className="pb-5">


            <img className="img-fluid rounded" src={img} alt="Trip Image" />

            <div className="py-5">

              <div className="row">
                <div className="col-4 d-flex align-items-center">
                  <p className="fs-5">
                    <i className="fa-solid fa-location-dot text-primary">
                    </i>{destinazione}
                  </p>
                </div>
                <div className="col-4 ">
                  <div className="text-center d-flex fs-5 flex-column">
                    <span className="fw-semibold">
                      <i class="fa-solid fa-plane-departure"></i>
                    </span>
                    <span>{startDate}</span>

                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center d-flex fs-5 flex-column">
                    <span className="fw-semibold">
                      <i class="fa-solid fa-plane-arrival"></i>
                    </span>
                    <span>{endDate}</span>

                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex align-items-center">
            <h2 className="align-middle">Partecipanti</h2>
            <SearchBar onSearch={handleSearch} />
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">#</th>
                <th scope="col" className="text-center">Nome</th>
                <th scope="col" className="text-center">Cognome</th>
                <th scope="col" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPartecipanti.map((element, id) => {
                return (
                  <tr key={id}>
                    <th scope="row" className="text-center">{element.id}</th>
                    <td className="text-center">{element.nome}</td>
                    <td className="text-center">{element.cognome}</td>
                    <td className="text-center">
                      <Link to={`/contact/${element.id}`} className="btn btn-outline-secondary p-1">
                        <i className="fa-regular fa-eye text-secondary"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
              {filteredPartecipanti.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center">Nessun partecipante trovato</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div >
    </>
  );
}
