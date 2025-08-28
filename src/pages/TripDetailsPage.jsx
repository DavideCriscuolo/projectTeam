import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { plannedTrips } from "../data/trips";
import { participants } from "../data/participants";
import SearchBar from "../components/SearchBar";

export default function TripDetailsPage() {
  //RECUPERO IL PARAMETRO ID UTILIZZANDO USEPARAMS
  const { id } = useParams();

  //SETTO LA VARIABILE DI STATO PER IL FILTRAGGIO DEI PARTECIPANTI
  const [searchFilters, setSearchFilters] = useState({ nome: "", cognome: "" });

  //DESTRUTTURO L'ARRAY DI OGGETTI DEL VIAGGIO CON LO STESSO PARAMETRO/POSIZIONE
  const { nomeViaggio, destinazione, dataInizio, dataFine, img } =
    plannedTrips[id];

  //FORMATTO LA DATA CON VISUALIZZAZIONE DD-MM-YYYY
  const startDate = new Date(dataInizio).toLocaleDateString();
  const endDate = new Date(dataFine).toLocaleDateString();

  //FILTER DEI PARTECIPANTI AL VIAGGIO
  const partecipanti = participants.filter((element) => {
    if (element.idViaggio == id) {
      return element;
    }
  });

  const filteredPartecipanti = useMemo(() => {
    return partecipanti.filter((participant) => {
      const matchesNome =
        searchFilters.nome === "" ||
        participant.nome
          .toLowerCase()
          .includes(searchFilters.nome.toLowerCase());
      const matchesCognome =
        searchFilters.cognome === "" ||
        participant.cognome
          .toLowerCase()
          .includes(searchFilters.cognome.toLowerCase());

      return matchesNome && matchesCognome;
    });
  }, [partecipanti, searchFilters]);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  return (
    <>
      <div className="container">
        {/* VISUALIZZAZIONE VIAGGIO */}
        <p className="py-3 fs-1 ">{nomeViaggio}</p>

        <div className="pb-5">
          <img className="img-fluid rounded" src={img} alt="Trip Image" />

          {/* DETTAGLI DEL VIAGGIO */}
          <div className="py-5">
            <div className="row">
              <div className="col-4">
                <div className="fs-5 text-center d-flex flex-column">
                  <span>
                    <i className="fa-solid fa-location-dot text-primary "></i>
                  </span>
                  <span>{destinazione}</span>
                </div>
              </div>
              <div className="col-4 ">
                <div className="text-center d-flex fs-5 flex-column">
                  <span className="fw-semibold">
                    <i className="fa-solid fa-plane-departure"></i>
                  </span>
                  <span>{startDate}</span>
                </div>
              </div>
              <div className="col-4">
                <div className="text-center d-flex fs-5 flex-column">
                  <span className="fw-semibold">
                    <i className="fa-solid fa-plane-arrival"></i>
                  </span>
                  <span>{endDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEZIONE PARTECIPANTI */}
        <section className="mt-3">
          <div className="d-flex flex-wrap align-items-center">
            <h2 className="align-middle">Partecipanti</h2>
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* TABELLA DEI PARTECIPANTI */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  #
                </th>
                <th scope="col" className="text-center">
                  Nome
                </th>
                <th scope="col" className="text-center">
                  Cognome
                </th>
                <th scope="col" className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* MAP DEI PARTECIPANTI PER STAMPARLI DINAMICAMENTE IN PAGINA */}
              {filteredPartecipanti.map((element, id) => {
                return (
                  <tr key={id}>
                    <th scope="row" className="text-center">
                      {id + 1}
                    </th>
                    <td className="text-center">{element.nome}</td>
                    <td className="text-center">{element.cognome}</td>
                    <td className="text-center">
                      <Link
                        to={`/contact/${element.id}`}
                        className="btn btn-outline-secondary p-1"
                      >
                        <i className="fa-regular fa-eye text-secondary"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}

              {/* IN CASO DI RICERCA PARTECIPANTE ERRATA... */}
              {filteredPartecipanti.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center">
                    Nessun partecipante trovato
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
