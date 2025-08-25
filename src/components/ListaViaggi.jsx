import { useState } from "react";
export default function ListaViaggi(prop) {
  const [isHover, setIsHover] = useState(null);
  return (
    <>
      <div className="container border  border-primary">
        <h1> Card Viaggi</h1>
        <div className="row">
          {prop.map((trip) => (
            <div key={trip.id} className="col">
              <div className="card text-bg-dark">
                <img
                  src={trip.img}
                  className="card-img"
                  alt="Img copertina viaggio"
                  onMouseEnter={() => setIsHover(trip.id)}
                />
                {isHover === trip.id && (
                  <div className="card-img-overlay">
                    <h5 className="card-title">{trip.nomeViaggio}</h5>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
