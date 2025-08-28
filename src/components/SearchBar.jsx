import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ nome, cognome });
  };

  const handleReset = () => {
    setNome("");
    setCognome("");
    onSearch({ nome: "", cognome: "" });
  };

  return (
    <div className="container d-flex justify-content-end" role="search">
      <form
        onSubmit={handleSearch}
        className="col-12 d-flex flex-direction-row align-items-center my-3"
      >
        <i className="fa-solid fa-magnifying-glass fa-lg mx-2"></i>
        <div className="position-relative me-2 w-50">
          <input
            className="form-control"
            type="search"
            placeholder="Nome"
            aria-label="Search by name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {nome && (
            <button
              type="button"
              className="btn position-absolute top-50 end-0 translate-middle-y pe-2"
              style={{ border: "none", background: "transparent" }}
              onClick={() => setNome("")}
              aria-label="Clear name"
            >
              {/* <i className="fa-solid fa-times text-muted"></i> */}
            </button>
          )}
        </div>
        <div className="position-relative me-2 w-50">
          <input
            className="form-control"
            type="search"
            placeholder="Cognome"
            aria-label="Search by surname"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
          />
          {cognome && (
            <button
              type="button"
              className="btn position-absolute top-50 end-0 translate-middle-y pe-2"
              style={{ border: "none", background: "transparent" }}
              onClick={() => setCognome("")}
              aria-label="Clear surname"
            >
              {/* <i className="fa-solid fa-times text-muted"></i> */}
            </button>
          )}
        </div>
        <button className="btn btn-success me-2" type="submit">
          Cerca
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
