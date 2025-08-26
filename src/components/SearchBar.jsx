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
            <form onSubmit={handleSearch} className="col-4 d-flex flex-direction-row align-items-center my-3">
                <i className="fa-solid fa-magnifying-glass fa-lg mx-2"></i>
                <input
                    className="form-control me-2 w-50"
                    type="search"
                    placeholder="Nome"
                    aria-label="Search by name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    className="form-control me-2 w-50"
                    type="search"
                    placeholder="Cognome"
                    aria-label="Search by surname"
                    value={cognome}
                    onChange={(e) => setCognome(e.target.value)}
                />
                <button className="btn btn-outline-success me-2" type="submit">Cerca</button>
                <button className="btn btn-outline-secondary" type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}