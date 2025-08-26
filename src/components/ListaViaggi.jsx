import { useState } from "react";
import "./../css/ListaViaggi.css";
import { Link } from "react-router-dom";
export default function ListaViaggi({ viaggi }) {
  const [isHover, setIsHover] = useState(null);
  return (
    <>
      <div className="container border border-primary mb-5">
        <h4 className="text-center p-3"> Card Viaggi </h4>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2  row-cols-lg-3">
          {viaggi?.map((trip) => (
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
                      <h5 className="card-title">{trip.nomeViaggio}</h5>
                    </div>
                  </>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
