import { useState } from "react";
import "../css/FeaturesPage.css";

export default function FeaturesPage() {
  const [ageGroup, setAgeGroup] = useState("");

  const handleAgeChange = (e) => {
    setAgeGroup(e.target.value);
  };

  return (
    <div className="container p-5">
      {/* Hero */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Scopri le nostre proposte di viaggio 🌍</h1>
        <p className="text-white">
          Scegli il viaggio perfetto per te e trova il gruppo giusto con cui
          condividere l’esperienza.
        </p>
      </div>

      {/* Card Proposte Viaggio */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="/images/maldive_pic.jpg"
              className="card-img-top"
              alt="Viaggio al mare"
            />
            <div className="card-body">
              <h5 className="card-title">Relax al mare</h5>
              <p className="card-text">
                Una settimana di relax su spiagge cristalline e rilassanti.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="/images/mountain_trip.jpeg"
              className="card-img-top"
              alt="Viaggio in montagna"
            />
            <div className="card-body">
              <h5 className="card-title">Avventura in montagna</h5>
              <p className="card-text">
                Trekking tra i paesaggi mozzafiato con guide esperte e gruppi
                affiatati.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="/images/toscana_pic.jpg"
              className="card-img-top"
              alt="Viaggio in città"
            />
            <div className="card-body">
              <h5 className="card-title">City Break in Europa</h5>
              <p className="card-text">
                Weekend nelle capitali europee: cultura, shopping e divertimento
                con viaggiatori come te.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Selezione Gruppo di Età */}
      <div className="mt-5 text-center">
        <h4>Scegli il tuo gruppo d’età</h4>
        <select
          className="form-select w-50 mx-auto my-3"
          value={ageGroup}
          onChange={handleAgeChange}
        >
          <option value="">Seleziona un gruppo</option>
          <option value="18-25">18-25 anni (giovani e dinamici)</option>
          <option value="26-40">26-40 anni (avventura e divertimento)</option>
          <option value="41-60">41-60 anni (cultura e relax)</option>
          <option value="60+">60+ anni (comfort e benessere)</option>
        </select>

        {ageGroup && (
          <div className="alert alert-info mt-3">
            Hai scelto il gruppo: <strong>{ageGroup}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
