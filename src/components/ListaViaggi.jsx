import { useState } from "react";
import "./../css/ListaViaggi.css";
import { Link } from "react-router-dom";

export default function ListaViaggi({ viaggi }) {
  const [isHover, setIsHover] = useState(null);
  const [trips, setTrips] = useState(viaggi || []); // copia modificabile
  const [showForm, setShowForm] = useState(false);
  const [newTrip, setNewTrip] = useState({
    id: "",
    nomeViaggio: "",
    img: "",
    catchPhrase: "",
  });

  // Apri/chiudi form
  const toggleForm = () => setShowForm(!showForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTrip({ ...newTrip, [name]: value });
  };

  const handleAddTrip = (e) => {
    e.preventDefault();

    const tripToAdd = {
      ...newTrip,
      id: trips.length + 1, // id semplificato
    };

    setTrips([...trips, tripToAdd]);
    setNewTrip({ id: "", nomeViaggio: "", img: "" });
    setShowForm(false);
  };

  return (
    <>
      <div className="container mb-5 font_family">
        <h3 className="text-center p-3 text-white"> I nostri Viaggi attivi </h3>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2  row-cols-lg-3">
          {trips?.map((trip) => (
            <div key={trip.id} className="col p-3">
              <Link to={`/trip/${trip.id}`}>
                <div className="card text-bg-dark">
                  <img
                    src={trip.img}
                    className="card-img h-100"
                    alt="Img copertina viaggio"
                  />

                  <>
                    <div
                      className={`card-img-overlay d-flex justify-content-center align-items-center ${
                        isHover === trip.id ? "overlay" : "hide"
                      }`}
                      onMouseEnter={() => setIsHover(trip.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <h5 className="card-title fw-bold">{trip.nomeViaggio}</h5>
                    </div>
                  </>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mb-3">
          <button className="btn btn-primary" onClick={toggleForm}>
            {showForm ? "Chiudi" : "Aggiungi viaggio"}
          </button>
        </div>

        {showForm && (
          <form className="mb-4" onSubmit={handleAddTrip}>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                name="nomeViaggio"
                placeholder="Nome del viaggio"
                value={newTrip.nomeViaggio}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                name="img"
                placeholder="URL immagine"
                value={newTrip.img}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                name="catchPhrase"
                placeholder="catch Phrase"
                value={newTrip.catchPhrase}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Salva
            </button>
          </form>
        )}
      </div>
    </>
  );
}
