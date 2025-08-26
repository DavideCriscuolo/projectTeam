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
      <div className="container">
        <p className="py-3 fs-1">Viaggio: <b className="">{nomeViaggio}</b></p>
        <div className="py-4 row">
          <div className="">
            <img className="img-fluid rounded" src={img} alt="" />
          </div>
          <div className="py-3">
            <h4>Dettagli Viaggio: </h4>
            <p>{destinazione}</p>
            <div className="d-flex gap-3">
              Da: <b>{dataInizio}</b>
              Al: <b>{dataFine}</b>
            </div>
          </div>
        </div>

        <h2>Partecipanti</h2>
        <SearchBar onSearch={handleSearch} />
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
            {partecipanti.map((element, id) => {
              return (
                <>

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
              })
                  ) : (
                  <tr>
                    <td colSpan="4" className="text-center">Nessun partecipante trovato</td>
                  </tr>
            )}
                </tbody >
        </table>
      </div>
    </>
  );
}
