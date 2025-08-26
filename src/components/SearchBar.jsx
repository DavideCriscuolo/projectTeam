export default function SearchBar() {
    return (
        <div className="container d-flex justify-content-end" role="search">
            <div className="col-4 d-flex flex-direction-row align-items-center my-3">
                <i class="fa-solid fa-magnifying-glass fa-lg mx-2"></i>
                <input className="form-control me-2 w-50" type="search" placeholder="Nome" aria-label="Search" />
                <input className="form-control me-2 w-50" type="search" placeholder="Cognome" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Cerca</button>
            </div>
        </div>
    );
}